import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSocialDto {
  @ApiProperty({ description: 'Profile ID associated with the social account', example: '60f71a4f5f1b2c001c8e4c8c' })
  @IsNotEmpty()
  profileId: Types.ObjectId;

  @ApiProperty({ description: 'Name of the social platform (e.g., LinkedIn, Twitter)', example: 'LinkedIn' })
  @IsNotEmpty()
  @IsString()
  platformName: string;

  @ApiProperty({ description: 'URL to the user\'s profile on the platform', example: 'https://linkedin.com/in/username' })
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
