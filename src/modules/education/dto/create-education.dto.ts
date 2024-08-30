import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEnum, IsDate, IsMongoId, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { DegreeNameEnum } from 'src/interfaces';

export class CreateEducationDto {
  @ApiProperty({ description: 'Reference to the profile ID', type: String })
  @IsNotEmpty()
  @IsMongoId()
  profileId: string;

  @ApiProperty({ description: 'Name of the institute' })
  @IsNotEmpty()
  @IsString()
  instituteName: string;

  @ApiProperty({ description: 'Degree name', enum: DegreeNameEnum })
  @IsNotEmpty()
  @IsEnum(DegreeNameEnum)
  degreeName: string;

  @ApiProperty({ description: 'Description of the education', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Start date of the education' })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  start: Date;

  @ApiProperty({ description: 'End date of the education', required: false, type: String })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  end?: Date;

  @ApiProperty({ description: 'Is this education currently ongoing?', required: false, default: false })
  @IsOptional()
  @IsBoolean()
  present?: boolean;
}
