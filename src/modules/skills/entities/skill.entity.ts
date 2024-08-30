import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @ApiProperty({ description: 'Name of the skill' })
  @Prop({ required: true, unique: true })
  name: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
