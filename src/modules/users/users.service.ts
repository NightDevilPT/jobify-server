import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserCommand } from './commands/impl/create-user.command';
import { VerifyEmailCommand } from './commands/impl/verify-mail.command';

@Injectable()
export class UsersService {
  constructor(private readonly commandBus: CommandBus) {}

  create(payload: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(payload));
  }

  verifyUser(token:string) {
    return this.commandBus.execute(new VerifyEmailCommand(token));
  }
}
