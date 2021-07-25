import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class MovieDTO {
  @IsString()
  title: string;

  @IsNumber()
  year: number;

  @IsOptional()
  @IsString({ each: true })
  genres: string[];
}

export class UpdateMovieDTO extends PartialType(MovieDTO) {}
