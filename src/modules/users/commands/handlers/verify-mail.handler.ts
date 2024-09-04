import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { VerifyEmailCommand } from '../impl/verify-mail.command';
import { ErrorService } from 'src/shared/error/error.service';
import { LogService } from 'src/shared/logger/logger.service';
import { UserRepository } from '../../repository/user.repository';

@CommandHandler(VerifyEmailCommand)
export class VerifyMailHandler implements ICommandHandler<VerifyEmailCommand> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly logger: LogService,
    private readonly errorService: ErrorService,
  ) {
    this.logger.setContext(VerifyMailHandler.name);
  }

  async execute(command: VerifyEmailCommand): Promise<any> {
    const { token } = command;
    this.logger.log(
      `Received VerifyEmailCommand with token: ${token}`,
      'execute',
    );

    try {
      // Check if the token is provided
      if (!token) {
        this.logger.warn(
          'Token is missing in the verification request',
          'execute',
        );
        throw this.errorService.handleBadRequestError(
          'Token is required for verification',
        );
      }

      this.logger.debug('Finding user by token...', 'execute');
      const user = await this.userRepository.findByToken(token);
	  console.log(user,'USER')

      if (!user) {
        this.logger.warn('User not found or token is invalid', 'execute');
        return this.errorService.handleNotFoundError('Invalid token');
      }

      this.logger.debug('User found, updating user details...', 'execute');
      
	  user.token = null;
      user.isVerified = true;
      await this.userRepository.save(user);

      this.logger.log(
        `User successfully verified with ID: ${user.id}`,
        'execute',
      );
      return { message: 'Email successfully verified',status:200 };
    } catch (error) {
      this.logger.error(
        `Error during email verification process with token: ${token}`,
        error.stack,
        'execute',
      );
      throw this.errorService.handleServerError('Failed to verify email');
    }
  }
}
