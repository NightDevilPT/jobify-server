import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ApplicationStatusEnum } from 'src/interfaces';

export type ApplicationDocument = Application & Document;

@Schema({ timestamps: true })
export class Application {
  @ApiProperty({ description: 'Reference to the job ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Job', required: true })
  jobId: string;

  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Profile', required: true })
  profileId: string;

  @ApiProperty({ description: 'URL or file path for resume used' })
  @Prop()
  resume: string;

  @ApiProperty({ description: 'Application status', enum: ApplicationStatusEnum })
  @Prop({ enum: ApplicationStatusEnum })
  applicationStatus: string;

  @ApiProperty({ description: 'Date when the application was submitted', default: Date.now })
  @Prop({ default: Date.now })
  appliedAt: Date;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
