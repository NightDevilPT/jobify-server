import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEnum, IsMongoId, IsDate } from 'class-validator';
import { ApplicationStatusEnum } from 'src/interfaces';

export class CreateApplicationDto {
  @ApiProperty({ description: 'Reference to the job ID', type: String })
  @IsNotEmpty()
  @IsMongoId()
  jobId: string;

  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @IsNotEmpty()
  @IsMongoId()
  profileId: string;

  @ApiProperty({ description: 'URL or file path for the resume used', required: false })
  @IsOptional()
  @IsString()
  resume?: string;

  @ApiProperty({ description: 'Application status', enum: ApplicationStatusEnum })
  @IsNotEmpty()
  @IsEnum(ApplicationStatusEnum)
  applicationStatus: ApplicationStatusEnum;
}
