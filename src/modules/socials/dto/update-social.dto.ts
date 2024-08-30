import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsUrl, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { CreateSocialDto } from './create-social.dto';

export class UpdateSocialDto {
  @ApiProperty({ description: 'Name of the social platform (e.g., LinkedIn, Twitter)', example: 'LinkedIn', required: false })
  @IsOptional()
  @IsString()
  platformName?: string;

  @ApiProperty({ description: 'URL to the user\'s profile on the platform', example: 'https://linkedin.com/in/username', required: false })
  @IsOptional()
  @IsUrl()
  url?: string;
}
