import { Module } from '@nestjs/common';
import { RedditThreadsService } from './services/reddit-threads/core/reddit-threads.service';
import { CorRedditThreadsService } from './services/reddit-threads/cor/cor-reddit-threads.service';

@Module({
  providers: [RedditThreadsService, CorRedditThreadsService]
})
export class RedditThreadsProvidersModule {}
