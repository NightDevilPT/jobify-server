import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsMongoId,
  IsNotEmpty,
  IsEnum,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import {
  CurrencyTypeEnum,
  IndustryEnum,
  JobStatusEnum,
  JobTypeEnum,
  WorkEnvironmentPreferenceEnum,
} from 'src/interfaces';
import { Type } from 'class-transformer';

export class SkillDto {
  @ApiProperty({
    description: 'Predefined skill ID (if referencing an existing skill)',
    required: false,
  })
  @IsOptional()
  @IsMongoId()
  id?: string;

  @ApiProperty({
    description: 'Custom skill name (if defining a new skill)',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
}

export class CreateJobDto {
  @ApiProperty({ description: 'Reference to the company ID', type: String })
  @IsNotEmpty()
  @IsMongoId()
  companyId: string;

  @ApiProperty({ description: 'Job title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Job description', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Job type', enum: JobTypeEnum })
  @IsNotEmpty()
  @IsEnum(JobTypeEnum)
  jobType: string;

  @ApiProperty({ description: 'Industry type', enum: IndustryEnum })
  @IsNotEmpty()
  @IsEnum(IndustryEnum)
  industry: string;

  @ApiProperty({
    description: 'Work environment preference',
    enum: WorkEnvironmentPreferenceEnum,
  })
  @IsNotEmpty()
  @IsEnum(WorkEnvironmentPreferenceEnum)
  workEnvironmentPreference: string;

  @ApiProperty({ description: 'Minimum salary', required: false })
  @IsOptional()
  @IsNumber()
  minSalary?: number;

  @ApiProperty({ description: 'Maximum salary', required: false })
  @IsOptional()
  @IsNumber()
  maxSalary?: number;

  @ApiProperty({
    description: 'User skills, can be predefined or custom',
    type: [SkillDto],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SkillDto)
  skills?: SkillDto[];

  @ApiProperty({
    description: 'City where the job is located',
    required: false,
  })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ description: 'Currency type', enum: CurrencyTypeEnum })
  @IsNotEmpty()
  @IsEnum(CurrencyTypeEnum)
  currencyType: string;

  @ApiProperty({
    description: 'Job status',
    enum: JobStatusEnum,
    required: false,
  })
  @IsOptional()
  @IsEnum(JobStatusEnum)
  status?: string;

  @ApiProperty({
    description: 'Reference to the user ID who created this entry',
    type: String,
  })
  @IsNotEmpty()
  @IsMongoId()
  createdBy: string;
}
