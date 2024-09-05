import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserCommand } from './commands/impl/create-user.command';
import { VerifyEmailCommand } from './commands/impl/verify-mail.command';
import { ForgetPasswordCommand } from './commands/impl/forget-password.command';
import { UpdatePasswordCommand } from './commands/impl/update-password.command';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UsersService {
  constructor(private readonly commandBus: CommandBus) {}

  create(payload: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(payload));
  }

  verifyUser(token: string) {
    return this.commandBus.execute(new VerifyEmailCommand(token));
  }

  forgetPassword(email: string) {
    return this.commandBus.execute(new ForgetPasswordCommand(email));
  }

  updatePassword(token: string, updatePasswordDto: UpdatePasswordDto) {
    const { password } = updatePasswordDto;
    return this.commandBus.execute(new UpdatePasswordCommand(token, password));
  }
}
