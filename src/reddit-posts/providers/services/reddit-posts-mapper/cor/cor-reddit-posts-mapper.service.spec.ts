import { Test, TestingModule } from '@nestjs/testing';
import { CorRedditPostsMapperService } from './cor-reddit-posts-mapper.service';

describe('CorRedditPostsMapperService', () => {
  let service: CorRedditPostsMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorRedditPostsMapperService],
    }).compile();

    service = module.get<CorRedditPostsMapperService>(CorRedditPostsMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
