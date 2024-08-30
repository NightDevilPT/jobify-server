import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { GenderEnum, JobTypeEnum, WorkEnvironmentPreferenceEnum } from 'src/interfaces';
import { Types } from 'mongoose';

export class CreateProfileDto {
  @ApiProperty({ description: 'Reference to the user ID', type: String, example: '60f71a4f5f1b2c001c8e4c8c' })
  @IsNotEmpty()
  userId: Types.ObjectId;

  @ApiProperty({ description: 'First name of the user', example: 'John' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Last name of the user', example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'Date of birth', type: Date, example: '1990-01-01', required: false })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: Date;

  @ApiProperty({ description: 'Gender', enum: GenderEnum, example: GenderEnum.MALE, required: false })
  @IsOptional()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @ApiProperty({ description: 'User bio', example: 'A short bio about the user', required: false })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({ description: 'Job type preference', enum: JobTypeEnum, example: JobTypeEnum.FULL_TIME, required: false })
  @IsOptional()
  @IsEnum(JobTypeEnum)
  jobTypePreference?: JobTypeEnum;

  @ApiProperty({ description: 'Work environment preference', enum: WorkEnvironmentPreferenceEnum, example: WorkEnvironmentPreferenceEnum.WORK_FROM_HOME, required: false })
  @IsOptional()
  @IsEnum(WorkEnvironmentPreferenceEnum)
  workEnvironmentPreference?: WorkEnvironmentPreferenceEnum;
}
