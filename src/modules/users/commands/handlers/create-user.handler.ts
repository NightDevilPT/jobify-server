import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HashService } from 'src/shared/hash/hash.service';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserRepository } from '../../repository/user.repository';
import { LogService } from 'src/shared/logger/logger.service';
import { Types } from 'mongoose';
import { MongoServerError } from 'mongodb';
import { ErrorService } from 'src/shared/error/error.service';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly hashService: HashService,
    private readonly userRepository: UserRepository,
    private readonly logger: LogService,
    private readonly error: ErrorService,
  ) {
    this.logger.setContext(CreateUserHandler.name);
  }

  async execute(command: CreateUserCommand): Promise<any> {
    const { createUserDto } = command;
    this.logger.log(
      `Received CreateUserCommand for email: ${createUserDto.email}`,
      'execute',
    );

    try {
      this.logger.debug('Hashing user password...', 'execute');
      const hashedPassword = await this.hashService.hashPassword(
        createUserDto.password,
      );
      const token = await this.hashService.hashPassword(
        new Date().toLocaleString(),
      );

      // Explicitly generate a new ObjectId
      const generatedId = new Types.ObjectId();

      const userToCreate = {
        ...createUserDto,
        _id: generatedId, // Set the generated _id
        password: hashedPassword,
        token,
      };

      this.logger.debug('Creating user in the repository...', 'execute');
      const createdUser = await this.userRepository.create(userToCreate);

      this.logger.log(
        `User successfully created with ID: ${createdUser._id}`,
        'execute',
      );
      return {
        message: 'email verification link sended to your Mail-Id',
        status: 201,
      };
    } catch (error) {
      if (error instanceof MongoServerError && error.code === 11000) {
        this.logger.error(
          `Duplicate email error: ${createUserDto.email}`,
          'execute',
        );
        throw this.error.handleConflictError(
          `A user with the email ${createUserDto.email} already exists.`,
        );
      } else {
        this.logger.error(
          `Failed to create user with email: ${createUserDto.email}`,
          error.stack,
          'execute',
        );
        throw this.error.handleServerError(error); // Re-throw other unexpected errors
      }
    }
  }
}
