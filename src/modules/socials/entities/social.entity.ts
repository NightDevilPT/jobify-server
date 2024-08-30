import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/modules/profiles/entities/profile.entity';

export type SocialDocument = Social & Document;

@Schema({ timestamps: true })
export class Social {
  @ApiProperty({ description: 'Profile ID associated with the social account', example: '60f71a4f5f1b2c001c8e4c8c' })
  @Prop({ type: Types.ObjectId, ref: Profile.name, required: true })
  profileId: Types.ObjectId;

  @ApiProperty({ description: 'Name of the social platform (e.g., LinkedIn, Twitter)', example: 'LinkedIn' })
  @Prop({ required: true })
  platformName: string;

  @ApiProperty({ description: 'URL to the user\'s profile on the platform', example: 'https://linkedin.com/in/username' })
  @Prop({ required: true })
  url: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const SocialSchema = SchemaFactory.createForClass(Social);
