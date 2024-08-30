import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { DegreeNameEnum } from 'src/interfaces';
import { Profile } from 'src/modules/profiles/entities/profile.entity';

export type EducationDocument = Education & Document;

@Schema({ timestamps: true })
export class Education {
  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Profile.name, required: true })
  profileId: string;

  @ApiProperty({ description: 'Name of the institute' })
  @Prop({ required: true })
  instituteName: string;

  @ApiProperty({ description: 'Degree name', enum: DegreeNameEnum })
  @Prop({ enum: DegreeNameEnum, required: true })
  degreeName: string;

  @ApiProperty({ description: 'Description of the education', required: false })
  @Prop()
  description?: string;

  @ApiProperty({ description: 'Start date of the education' })
  @Prop({ required: true })
  start: Date;

  @ApiProperty({ description: 'End date of the education', required: false, type: String })
  @Prop({ type: Date })
  end?: Date;

  @ApiProperty({ description: 'Is this education currently ongoing?', required: false, default: false })
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

export const EducationSchema = SchemaFactory.createForClass(Education);
