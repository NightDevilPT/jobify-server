import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ForgetPasswordCommand } from '../impl/forget-password.command';
import { UserRepository } from '../../repository/user.repository';
import { LogService } from 'src/shared/logger/logger.service';
import { ErrorService } from 'src/shared/error/error.service';
import { HashService } from 'src/shared/hash/hash.service';
import { MongoServerError } from 'mongodb';

@CommandHandler(ForgetPasswordCommand)
export class ForgetPasswordHandler implements ICommandHandler<ForgetPasswordCommand> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly logger: LogService,
    private readonly errorService: ErrorService,
    private readonly hashService: HashService,
  ) {
    this.logger.setContext(ForgetPasswordHandler.name);
  }

  async execute(command: ForgetPasswordCommand): Promise<any> {
    const { email } = command;

    this.logger.log(`Received ForgetPasswordCommand for email: ${email}`, 'execute');

    try {
      const user = await this.userRepository.findOne({ email });

      if (!user) {
        this.logger.warn(`User not found with email: ${email}`, 'execute');
        throw this.errorService.handleNotFoundError('User not found');
      }

      const resetToken = await this.hashService.hashPassword(new Date().toISOString());

      user.token = resetToken;
      await this.userRepository.save(user);

      this.logger.log(`Reset token generated for user with email: ${email}`, 'execute');

      return {
        message: 'Update password link sent to your email',
        status: 200,
      };
    } catch (error) {
      if (error instanceof MongoServerError && error.code === 11000) {
        this.logger.error(`Duplicate email error: ${email}`, 'execute');
        throw this.errorService.handleConflictError(
          `A user with the email ${email} already exists.`,
        );
      } else {
        this.logger.error(`Failed to process forget password request: ${email}`, error.stack, 'execute');
        throw this.errorService.handleServerError(error);
      }
    }
  }
}
