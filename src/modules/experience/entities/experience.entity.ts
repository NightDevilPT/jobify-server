import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { JobTypeEnum } from 'src/interfaces';

export type ExperienceDocument = Experience & Document;

@Schema({ timestamps: true })
export class Experience {
  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Profile', required: true })
  profileId: string;

  @ApiProperty({ description: 'Company name' })
  @Prop({ required: true })
  companyName: string;

  @ApiProperty({ description: 'Job title' })
  @Prop({ required: true })
  jobTitle: string;

  @ApiProperty({ description: 'Job type', enum: JobTypeEnum })
  @Prop({ enum: JobTypeEnum })
  jobType: string;

  @ApiProperty({ description: 'Description of the job experience' })
  @Prop()
  description: string;

  @ApiProperty({ description: 'Start date of the job experience', default: Date.now })
  @Prop({ required: true, default: Date.now })
  start: Date;

  @ApiProperty({ description: 'End date of the job experience', default: Date.now })
  @Prop({ default: Date.now })
  end: Date;

  @ApiProperty({ description: 'Reference to the user ID who created this entry', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  createdBy: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
