import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Types } from 'mongoose';
import { CreateReviewDto } from './create-review.dto';

export class UpdateReviewDto {
  @ApiProperty({ description: 'Review content', example: 'Great company with excellent services.', required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ description: 'Rating out of 5', example: 4, required: false })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;
}
