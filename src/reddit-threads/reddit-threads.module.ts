import { Module } from '@nestjs/common';
import { RedditThreadsProvidersModule } from './providers/reddit-threads-providers.module';
import { RedditThreadsController } from './reddit-threads.controller';

@Module({
  imports: [RedditThreadsProvidersModule],
  controllers: [RedditThreadsController]
})
export class RedditThreadsModule {}
