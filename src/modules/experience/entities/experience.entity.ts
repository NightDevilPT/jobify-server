import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { JobTypeEnum } from 'src/interfaces';
import { User } from 'src/modules/users/entities/user.entity';
import { Profile } from 'src/modules/profiles/entities/profile.entity';

export type ExperienceDocument = Experience & Document;

@Schema({ timestamps: true })
export class Experience {
  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Profile.name, required: true })
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

  @ApiProperty({ description: 'Description of the job experience', required: false })
  @Prop()
  description?: string;

  @ApiProperty({ description: 'Start date of the job experience' })
  @Prop({ required: true })
  start: Date;

  @ApiProperty({ description: 'End date of the job experience', required: false, type: String })
  @Prop({ type: Date })
  end?: Date;
  
  @ApiProperty({ description: 'Is this job currently ongoing?', required: false, default: false })
  @Prop({ type: Boolean, default: false })
  present?: boolean;

  @ApiProperty({ description: 'Reference to the user ID who created this entry', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Profile.name, required: true })
  createdBy: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
