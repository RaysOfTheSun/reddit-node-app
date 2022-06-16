import { Test, TestingModule } from '@nestjs/testing';
import { CorRedditThreadsService } from './cor-reddit-threads.service';

describe('CorRedditThreadsService', () => {
  let service: CorRedditThreadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorRedditThreadsService],
    }).compile();

    service = module.get<CorRedditThreadsService>(CorRedditThreadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
