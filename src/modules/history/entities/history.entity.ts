import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type HistoryDocument = History & Document;

@Schema({ timestamps: true })
export class History {
  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Profile', required: true })
  profileId: string;

  @ApiProperty({ description: 'Description of the event' })
  @Prop({ required: true })
  eventName: string;

  @ApiProperty({ description: 'Previous value' })
  @Prop()
  from: string;

  @ApiProperty({ description: 'New value' })
  @Prop()
  to: string;

  @ApiProperty({ description: 'Reference to the user ID who created this entry', type: String })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  createdBy: string;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const HistorySchema = SchemaFactory.createForClass(History);
