import { Module } from '@nestjs/common';
import { RedditUsersController } from './reddit-users.controller';

@Module({
  controllers: [RedditUsersController]
})
export class RedditUsersModule {}
