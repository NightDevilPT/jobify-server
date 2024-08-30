import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/modules/profiles/entities/profile.entity';
import { Company } from 'src/modules/companies/entities/company.entity';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {
  @ApiProperty({ description: 'Reference to the reviewer ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Profile.name, required: true })
  profileId: string;

  @ApiProperty({ description: 'Reference to the reviewee ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Company.name, required: true })
  companyId: string;

  @ApiProperty({ description: 'Review content' })
  @Prop({ required: true })
  content: string;

  @ApiProperty({ description: 'Rating out of 5' })
  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
