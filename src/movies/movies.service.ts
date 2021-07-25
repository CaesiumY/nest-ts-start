import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getOneMovie(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  createMovie(body: Movie): Movie {
    const newMovie: Movie = {
      id: this.movies.length + 1,
      ...body,
    };

    this.movies.push(newMovie);

    return newMovie;
  }

  deleteMovie(id: string): Movie {
    const deletedMovie = this.movies.find((movie) => movie.id === +id);

    this.movies = this.movies.filter((movie) => movie.id !== +id);

    return deletedMovie;
  }
}
