export class UpdatePasswordCommand {
  constructor(
    public readonly token: string,
    public readonly password: string,
  ) {}
}
