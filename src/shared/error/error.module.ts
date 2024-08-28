import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';

@Module({
  providers: [ErrorService],
  exports: [ErrorService], // Export ErrorService so it can be used in other modules
})
export class ErrorModule {}
