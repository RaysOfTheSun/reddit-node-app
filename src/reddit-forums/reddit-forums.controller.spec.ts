import { Test, TestingModule } from '@nestjs/testing';
import { RedditForumsController } from './reddit-forums.controller';

describe('RedditForumsController', () => {
  let controller: RedditForumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedditForumsController],
    }).compile();

    controller = module.get<RedditForumsController>(RedditForumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
