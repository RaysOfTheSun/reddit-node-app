import { Module } from '@nestjs/common';
import { CorRedditPostsService } from './services/reddit-posts/cor/cor-reddit-posts.service';
import { RedditPostsService } from './services/reddit-posts/core/reddit-posts.service';

@Module({
  providers: [
    {
      provide: RedditPostsService,
      useClass: CorRedditPostsService,
    },
  ],
  exports: [RedditPostsService],
})
export class RedditPostsProvidersModule {}
