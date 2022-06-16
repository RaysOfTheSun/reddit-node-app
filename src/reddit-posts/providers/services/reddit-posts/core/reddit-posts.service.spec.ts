import { Test, TestingModule } from '@nestjs/testing';
import { RedditPostsService } from './reddit-posts.service';

describe('RedditPostsService', () => {
  let service: RedditPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedditPostsService],
    }).compile();

    service = module.get<RedditPostsService>(RedditPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
