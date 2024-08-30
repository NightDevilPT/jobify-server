import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/modules/profiles/entities/profile.entity';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @ApiProperty({ description: 'Company name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ description: 'Company description', required: false })
  @Prop()
  description?: string;

  @ApiProperty({ description: 'Company website URL', required: false })
  @Prop()
  website?: string;

  @ApiProperty({ description: 'Company address', required: false })
  @Prop()
  address?: string;

  @ApiProperty({ description: 'City where the company is located', required: false })
  @Prop()
  city?: string;

  @ApiProperty({ description: 'Latitude for geolocation', required: false, type: Number })
  @Prop()
  latitude?: number;

  @ApiProperty({ description: 'Longitude for geolocation', required: false, type: Number })
  @Prop()
  longitude?: number;

  @ApiProperty({ description: 'Number of employees in the company', required: false, type: Number })
  @Prop({ type: Number })
  totalEmployees?: number;

  @ApiProperty({ description: 'Reference to the user ID who created this entry', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Profile.name, required: true })
  createdBy: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
