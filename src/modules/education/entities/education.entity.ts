import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { DegreeNameEnum } from 'src/interfaces';

export type EducationDocument = Education & Document;

@Schema({ timestamps: true })
export class Education {
  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Profile', required: true })
  profileId: string;

  @ApiProperty({ description: 'Name of the institute' })
  @Prop({ required: true })
  instituteName: string;

  @ApiProperty({ description: 'Degree name', enum:DegreeNameEnum })
  @Prop({ enum:DegreeNameEnum })
  degreeName: string;

  @ApiProperty({ description: 'Description of the education' })
  @Prop()
  description: string;

  @ApiProperty({ description: 'Start date of the education', default: Date.now })
  @Prop({ required: true })
  start: Date;

  @ApiProperty({ description: 'End date of the education', default: Date.now })
  @Prop({ })
  end: Date;

  @ApiProperty({ description: 'Reference to the user ID who created this entry', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  createdBy: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
