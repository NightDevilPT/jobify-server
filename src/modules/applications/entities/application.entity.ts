import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ApplicationStatusEnum } from 'src/interfaces';
import { Job } from 'src/modules/jobs/entities/job.entity';
import { Profile } from 'src/modules/profiles/entities/profile.entity';

export type ApplicationDocument = Application & Document;

@Schema({ timestamps: true })
export class Application {
  @ApiProperty({ description: 'Reference to the job ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Job.name, required: true })
  jobId: string;

  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Profile.name, required: true })
  profileId: string;

  @ApiProperty({ description: 'URL or file path for the resume used', required: false })
  @Prop()
  resume?: string;

  @ApiProperty({ description: 'Application status', enum: ApplicationStatusEnum })
  @Prop({ enum: ApplicationStatusEnum, required: true })
  applicationStatus: ApplicationStatusEnum;

  @ApiProperty({ description: 'Date when the application was submitted', type: Date, default: Date.now })
  @Prop({ type: Date, default: Date.now })
  appliedAt: Date;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
