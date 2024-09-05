import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePasswordCommand } from '../impl/update-password.command';
import { UserRepository } from '../../repository/user.repository';
import { LogService } from 'src/shared/logger/logger.service';
import { ErrorService } from 'src/shared/error/error.service';
import { HashService } from 'src/shared/hash/hash.service';

@CommandHandler(UpdatePasswordCommand)
export class UpdatePasswordHandler
  implements ICommandHandler<UpdatePasswordCommand>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly logger: LogService,
    private readonly errorService: ErrorService,
    private readonly hashService: HashService,
  ) {
    this.logger.setContext(UpdatePasswordHandler.name);
  }

  async execute(command: UpdatePasswordCommand): Promise<any> {
    const { token, password } = command;

    this.logger.log(
      `Received UpdatePasswordCommand with token: ${token}`,
      'execute',
    );

    if (!token) {
      this.logger.warn(
        'Token is missing in the update password request',
        'execute',
      );
      return this.errorService.handleBadRequestError(
        'Token is required for password update',
      );
    }

    try {
      const user = await this.userRepository.findByToken(token);

      if (!user) {
        this.logger.warn('User not found or token is invalid', 'execute');
        return this.errorService.handleUnauthorizedError('Invalid token');
      }

      const hashedPassword = await this.hashService.hashPassword(password);
      user.password = hashedPassword;
      user.token = null;

      await this.userRepository.save(user);

      this.logger.log(
        `Password successfully updated for user with ID: ${user._id}`,
        'execute',
      );

      return {
        message: 'Password successfully updated',
        status: 200,
      };
    } catch (error) {
      this.logger.error(
        `Error during password update with token: ${token}`,
        error.stack,
        'execute',
      );
      throw this.errorService.handleServerError('Failed to update password');
    }
  }
}
