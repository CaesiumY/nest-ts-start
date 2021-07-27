import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

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
      service.createMovie({
        title: 'test',
        year: 2021,
        genres: ['test', 'test2'],
      });

      expect(service.getOneMovie(1)).toBeDefined();
    });

    it('should return an Error', () => {
      try {
        service.getOneMovie(9);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
