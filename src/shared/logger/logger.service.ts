import { Injectable, Scope } from '@nestjs/common';
import pino from 'pino';

@Injectable({ scope: Scope.TRANSIENT })
export class LogService {
  private logger: pino.Logger;
  private context: string;

  constructor() {
    this.configureLogger();
  }

  public setContext(context: string) {
    this.context = context;
  }

  private configureLogger() {
    this.logger = pino({
      level: 'debug',
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:dd-mm-yyyy - HH:MM:ss',
          ignore: 'pid,hostname',
        },
      },
    });
  }

  private formatMessage(message: string, additionalContext?: string): string {
    const formattedMessage =
      typeof message === 'object' ? JSON.stringify(message) : message;
    const fullContext = additionalContext
      ? `${this.context} [${additionalContext}]`
      : this.context;
    return `${formattedMessage} [${fullContext}]`;
  }

  public log(message: string, additionalContext?: string) {
    this.logger.info(this.formatMessage(message, additionalContext));
  }

  public error(message: string, trace: string = '', additionalContext?: string) {
    this.logger.error({ trace }, this.formatMessage(message, additionalContext));
  }

  public warn(message: string, additionalContext?: string) {
    this.logger.warn(this.formatMessage(message, additionalContext));
  }

  public debug(message: string, additionalContext?: string) {
    this.logger.debug(this.formatMessage(message, additionalContext));
  }

  public verbose(message: string, additionalContext?: string) {
    this.logger.trace(this.formatMessage(message, additionalContext));
  }
}
