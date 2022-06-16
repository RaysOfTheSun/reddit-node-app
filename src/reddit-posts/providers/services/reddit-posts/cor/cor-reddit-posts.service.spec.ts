import { Test, TestingModule } from '@nestjs/testing';
import { CorRedditPostsService } from './cor-reddit-posts.service';

describe('CorRedditPostsService', () => {
  let service: CorRedditPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorRedditPostsService],
    }).compile();

    service = module.get<CorRedditPostsService>(CorRedditPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
