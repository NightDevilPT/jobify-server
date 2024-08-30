import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { UserTypeEnum } from 'src/interfaces';

export class CreateUserDto {
  @ApiProperty({ description: 'User type', enum: UserTypeEnum })
  @IsOptional()
  @IsEnum(UserTypeEnum)
  userType?: UserTypeEnum;
}
