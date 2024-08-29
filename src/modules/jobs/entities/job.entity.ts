import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { CurrencyTypeEnum, IndustryEnum, JobStatusEnum, JobTypeEnum, WorkEnvironmentPreferenceEnum } from 'src/interfaces';

export type JobDocument = Job & Document;

@Schema({ timestamps: true })
export class Job {
  @ApiProperty({ description: 'Reference to the company ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Company', required: true })
  companyId: string;

  @ApiProperty({ description: 'Job title' })
  @Prop({ required: true })
  title: string;

  @ApiProperty({ description: 'Job description' })
  @Prop()
  description: string;

  @ApiProperty({ description: 'Job type', enum: JobTypeEnum })
  @Prop({ enum: JobTypeEnum })
  jobType: string;

  @ApiProperty({ description: 'Industry type', enum: IndustryEnum })
  @Prop({ enum: IndustryEnum })
  industry: string;

  @ApiProperty({ description: 'Work environment preference', enum: WorkEnvironmentPreferenceEnum })
  @Prop({ enum: WorkEnvironmentPreferenceEnum })
  workEnvironmentPreference: string;

  @ApiProperty({ description: 'Minimum salary' })
  @Prop()
  minSalary: number;

  @ApiProperty({ description: 'Maximum salary' })
  @Prop()
  maxSalary: number;

  @ApiProperty({ description: 'City where the job is located' })
  @Prop()
  city: string;

  @ApiProperty({ description: 'Currency type', enum: CurrencyTypeEnum })
  @Prop({ enum: CurrencyTypeEnum })
  currencyType: string;

  @ApiProperty({ description: 'Date when the job was posted', default: Date.now })
  @Prop({ default: Date.now })
  postedAt: Date;

  @ApiProperty({ description: 'Reference to the user ID who created this entry', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  createdBy: string;

  @ApiProperty({ description: 'Job status', enum: JobStatusEnum })
  @Prop({ enum: JobStatusEnum })
  status: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const JobSchema = SchemaFactory.createForClass(Job);
