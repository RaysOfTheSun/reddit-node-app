import { Test, TestingModule } from '@nestjs/testing';
import { RedditThreadsController } from './reddit-threads.controller';

describe('RedditThreadsController', () => {
  let controller: RedditThreadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedditThreadsController],
    }).compile();

    controller = module.get<RedditThreadsController>(RedditThreadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
