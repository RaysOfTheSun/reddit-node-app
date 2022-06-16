import { Test, TestingModule } from '@nestjs/testing';
import { RedditThreadsService } from './reddit-threads.service';

describe('RedditThreadsService', () => {
  let service: RedditThreadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedditThreadsService],
    }).compile();

    service = module.get<RedditThreadsService>(RedditThreadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
