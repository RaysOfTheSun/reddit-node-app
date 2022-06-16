import { Module } from '@nestjs/common';
import { RedditPostsProvidersModule } from './providers/reddit-posts-providers.module';
import { RedditPostsController } from './reddit-posts.controller';

@Module({
  controllers: [RedditPostsController],
  imports: [RedditPostsProvidersModule],
})
export class RedditPostsModule {}
