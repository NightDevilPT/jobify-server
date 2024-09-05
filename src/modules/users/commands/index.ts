import { CreateUserHandler } from './handlers/create-user.handler';
import { VerifyMailHandler } from './handlers/verify-mail.handler';
import { ForgetPasswordHandler } from './handlers/forget-password.handler';
import { UpdatePasswordHandler } from './handlers/update-password.handler'; // Import handler

export const UserCommands = [
  CreateUserHandler,
  VerifyMailHandler,
  ForgetPasswordHandler,
  UpdatePasswordHandler,
];
