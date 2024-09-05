import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ForgetPasswordDto {
  @ApiProperty({
    description: 'User email for password reset',
    example: 'nightdevilpt@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
