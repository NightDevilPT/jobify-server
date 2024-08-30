import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEnum, IsDate, IsMongoId, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { JobTypeEnum } from 'src/interfaces';

export class CreateExperienceDto {
  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @IsNotEmpty()
  @IsMongoId()
  profileId: string;

  @ApiProperty({ description: 'Company name' })
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @ApiProperty({ description: 'Job title' })
  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @ApiProperty({ description: 'Job type', enum: JobTypeEnum })
  @IsNotEmpty()
  @IsEnum(JobTypeEnum)
  jobType: string;

  @ApiProperty({ description: 'Description of the job experience', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Start date of the job experience' })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  start: Date;

  @ApiProperty({ description: 'End date of the job experience', required: false, type: String })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  end?: Date;

  @ApiProperty({ description: 'Is this job currently ongoing?', required: false, default: false })
  @IsOptional()
  @IsBoolean()
  present?: boolean;
}
