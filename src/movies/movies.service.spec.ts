import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

const EXISTING_ID = 1;
const NOT_EXISTING_ID = 9;

const createMovieForTesting = (service: MoviesService) => {
  service.createMovie({
    title: 'test',
    year: 2021,
    genres: ['test', 'test2'],
  });
};

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllMovies', () => {
    it('should return All Movies of Array', () => {
      expect(service.getAllMovies()).toBeInstanceOf(Array);
    });
  });

  describe('getOneMovie', () => {
    it('should return One Movie with ID', () => {
      createMovieForTesting(service);

      expect(service.getOneMovie(EXISTING_ID)).toBeDefined();
    });

    it('should return an Error', () => {
      try {
        service.getOneMovie(NOT_EXISTING_ID);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('createMovie', () => {
    it('should create a Movie', () => {
      const beforeCreateLength = service.getAllMovies().length;
      createMovieForTesting(service);
      const afterCreateLength = service.getAllMovies().length;

      expect(afterCreateLength).toBeGreaterThan(beforeCreateLength);
    });
  });

  describe('deleteMovie', () => {
    it('should delete a Movie', () => {
      createMovieForTesting(service);

      const beforeDeleteLength = service.getAllMovies().length;
      service.deleteMovie(EXISTING_ID);
      const afterDeleteLength = service.getAllMovies().length;

      expect(afterDeleteLength).toBeLessThan(beforeDeleteLength);
    });

    it('should return an Error', () => {
      try {
        service.deleteMovie(NOT_EXISTING_ID);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
