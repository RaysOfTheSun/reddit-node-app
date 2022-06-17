import { Test, TestingModule } from '@nestjs/testing';
import { CorRedditForumsService } from './cor-reddit-forums.service';

describe('CorRedditForumsService', () => {
  let service: CorRedditForumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorRedditForumsService],
    }).compile();

    service = module.get<CorRedditForumsService>(CorRedditForumsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
