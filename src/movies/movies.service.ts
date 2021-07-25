import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getOneMovie(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);

    if (!movie) throw new NotFoundException(`Movie ID ${id} Not Found`);

    return movie;
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
    const deletedMovie = this.getOneMovie(id);

    this.movies = this.movies.filter((movie) => movie.id !== +id);

    return deletedMovie;
  }

  updateMovie(id: string, movieData): Movie {
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
