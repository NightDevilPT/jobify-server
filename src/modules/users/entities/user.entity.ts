import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { UserTypeEnum } from 'src/interfaces';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @ApiProperty({ description: 'Unique identifier for the user', readOnly: true })
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @ApiProperty({ description: 'Unique email identifier' })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ description: 'Unique email identifier' })
  @Prop({ required: true, unique: true })
  username: string;

  @ApiProperty({ description: 'Hashed password' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ description: 'User type', enum: UserTypeEnum })
  @Prop({ required: true, enum: UserTypeEnum })
  userType: string;

  @ApiProperty({ description: 'Indicates if the user is verified' })
  @Prop({ default: false })
  isVerified: boolean;

  @ApiProperty({ description: 'Creation timestamp', readOnly: true })
  createdAt: Date;

  @ApiProperty({ description: 'Last updated timestamp', readOnly: true })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
