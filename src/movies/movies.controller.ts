import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'Get All movies';
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return `Get Movie of ID: ${movieId}`;
  }

  @Post()
  createMovie() {
    return 'Create Movie';
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string) {
    return `Delete Movie of ID: ${movieId}`;
  }

  @Patch('/:id')
  updateMovie(@Param('id') movieId: string) {
    return `Update Movie of ID: ${movieId}`;
  }
}
