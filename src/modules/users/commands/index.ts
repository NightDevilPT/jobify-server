import { CreateUserHandler } from "./handlers/create-user.handler";
import { VerifyMailHandler } from "./handlers/verify-mail.handler";

export const UserCommands = [
	CreateUserHandler,
	VerifyMailHandler
]