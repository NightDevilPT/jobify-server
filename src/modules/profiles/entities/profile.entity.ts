import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { GenderEnum, JobTypeEnum, WorkEnvironmentPreferenceEnum } from 'src/interfaces';
import { User } from 'src/modules/users/entities/user.entity';
import { Skill } from 'src/modules/skills/entities/skill.entity';

export type ProfileDocument = Profile & Document;

@Schema({ timestamps: true })
export class Profile {
  @ApiProperty({ description: 'Reference to the user ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name, required: true })
  userId: string;

  @ApiProperty({ description: 'First name of the user' })
  @Prop({ required: true })
  firstName: string;

  @ApiProperty({ description: 'Last name of the user' })
  @Prop({ required: true })
  lastName: string;

  @ApiProperty({ description: 'Date of birth', default: Date.now })
  @Prop({ default: Date.now })
  dateOfBirth: Date;

  @ApiProperty({ description: 'Gender', enum: GenderEnum })
  @Prop({ enum: GenderEnum })
  gender: string;

  @ApiProperty({ description: 'User bio' })
  @Prop()
  bio: string;

  @ApiProperty({ description: 'User Experience' })
  @Prop()
  experience: string;

  @ApiProperty({ description: 'Expected salary' })
  @Prop()
  expectedSalary: number;

  @ApiProperty({ description: 'User skills, can be predefined or custom', type: [String] })
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: Skill.name }] })
  skills: (string | { name: string })[];

  @ApiProperty({ description: 'Job type preference', enum: JobTypeEnum })
  @Prop({ enum: JobTypeEnum })
  jobTypePreference: string;

  @ApiProperty({ description: 'Work environment preference', enum: WorkEnvironmentPreferenceEnum })
  @Prop({ enum: WorkEnvironmentPreferenceEnum })
  workEnvironmentPreference: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
