import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @ApiProperty({ description: 'New password', example: 'test@123' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
