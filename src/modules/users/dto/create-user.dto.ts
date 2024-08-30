import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Unique email identifier' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Unique username' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'Password' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
