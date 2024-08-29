import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IndustryEnum } from 'src/interfaces';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @ApiProperty({ description: 'Company name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ description: 'Company description' })
  @Prop()
  description: string;

  @ApiProperty({ description: 'Company website URL' })
  @Prop()
  website: string;

  @ApiProperty({ description: 'Company address' })
  @Prop()
  address: string;

  @ApiProperty({ description: 'City where the company is located' })
  @Prop()
  city: string;

  @ApiProperty({ description: 'Location description' })
  @Prop()
  location: string;

  @ApiProperty({ description: 'Latitude for geolocation' })
  @Prop()
  latitude: number;

  @ApiProperty({ description: 'Longitude for geolocation' })
  @Prop()
  longitude: number;

  @ApiProperty({ description: 'Reference to the user ID who created this entry', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  createdBy: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
