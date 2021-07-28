import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { MovieDTO, UpdateMovieDTO } from './dto/movies.dto';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getOneMovie(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);

    if (!movie) throw new NotFoundException(`Movie ID ${id} Not Found`);

    return movie;
  }

  createMovie(body: MovieDTO): Movie {
    const newMovie: Movie = {
      id: this.movies.length + 1,
      ...body,
    };

    this.movies.push(newMovie);

    return newMovie;
  }

  deleteMovie(id: number): Movie {
    const deletedMovie = this.getOneMovie(id);

    this.movies = this.movies.filter((movie) => movie.id !== +id);

    return deletedMovie;
  }

  updateMovie(id: number, movieData: UpdateMovieDTO): Movie {
    const movie = this.getOneMovie(id);
    this.deleteMovie(id);

    const updatedMovie = {
      ...movie,
      ...movieData,
    };

    this.movies.push(updatedMovie);

    return updatedMovie;
  }
}
