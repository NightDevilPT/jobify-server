import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UserTypeEnum } from 'src/interfaces';

export class CreateUserDto {  
  @ApiProperty({ description: 'Unique email identifier',default:'nightdevilpt@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Unique username',default:'nightdevilpt' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'Password',default:'test@123' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ description: 'Password', enum: UserTypeEnum,default:UserTypeEnum.CANDIDATE })
  @IsNotEmpty()
  userType: string;
}
