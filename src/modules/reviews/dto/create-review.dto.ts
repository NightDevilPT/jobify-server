import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';
import { Types } from 'mongoose';

export class CreateReviewDto {
  @ApiProperty({ description: 'Reference to the reviewer ID', type: String, example: '60f71a4f5f1b2c001c8e4c8c' })
  @IsNotEmpty()
  profileId: Types.ObjectId;

  @ApiProperty({ description: 'Reference to the reviewee ID', type: String, example: '60f71a4f5f1b2c001c8e4c8d' })
  @IsNotEmpty()
  companyId: Types.ObjectId;

  @ApiProperty({ description: 'Review content', example: 'Great company with excellent services.' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ description: 'Rating out of 5', example: 4 })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
