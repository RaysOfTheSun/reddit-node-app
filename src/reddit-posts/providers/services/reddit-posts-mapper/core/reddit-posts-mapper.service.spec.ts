import { Test, TestingModule } from '@nestjs/testing';
import { RedditPostsMapperService } from './reddit-posts-mapper.service';

describe('RedditPostsMapperService', () => {
  let service: RedditPostsMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedditPostsMapperService],
    }).compile();

    service = module.get<RedditPostsMapperService>(RedditPostsMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
