import { ApiProperty } from '@nestjs/swagger';
import { UserTypeEnum } from 'src/interfaces';

export class UserResponseDto {
  @ApiProperty({ description: 'Unique email identifier' })
  email: string;

  @ApiProperty({ description: 'Unique username' })
  username: string;

  @ApiProperty({ description: 'User type', enum: UserTypeEnum })
  userType: UserTypeEnum;

  @ApiProperty({ description: 'Indicates if the user is verified' })
  isVerified: boolean;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}
