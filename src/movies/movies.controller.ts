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
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  @Get('/search')
  searchMovies(@Query('title') movieTitle: string) {
    return `Search: ${movieTitle}`;
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return this.moviesService.getOneMovie(movieId);
  }

  @Post()
  createMovie(@Body() movieData) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string) {
    return this.moviesService.deleteMovie(movieId);
  }

  @Patch('/:id')
  updateMovie(@Param('id') movieId: string, @Body() movieData) {
    return this.moviesService.updateMovie(movieId, movieData);
  }
}
