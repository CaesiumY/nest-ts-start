import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'Get All movies';
  }

  @Get('/search')
  searchMovies(@Query('title') movieTitle: string) {
    return `Search: ${movieTitle}`;
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return `Get Movie of ID: ${movieId}`;
  }

  @Post()
  createMovie(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string) {
    return `Delete Movie of ID: ${movieId}`;
  }

  @Patch('/:id')
  updateMovie(@Param('id') movieId: string, @Body() movieData) {
    return {
      newId: movieId,
      ...movieData,
    };
  }
}
