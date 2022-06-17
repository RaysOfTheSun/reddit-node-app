import { Test, TestingModule } from '@nestjs/testing';
import { RedditForumsService } from './reddit-forums.service';

describe('RedditForumsService', () => {
  let service: RedditForumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedditForumsService],
    }).compile();

    service = module.get<RedditForumsService>(RedditForumsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
