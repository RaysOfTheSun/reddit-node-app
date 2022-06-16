import { Module } from '@nestjs/common';
import { CorRedditPostsService } from './services/reddit-posts/cor/cor-reddit-posts.service';
import { RedditPostsService } from './services/reddit-posts/core/reddit-posts.service';
import { CorRedditPostsMapperService } from './services/reddit-posts-mapper/cor/cor-reddit-posts-mapper.service';
import { RedditPostsMapperService } from './services/reddit-posts-mapper/core/reddit-posts-mapper.service';

@Module({
  providers: [
    {
      provide: RedditPostsService,
      useClass: CorRedditPostsService
    },
    {
      provide: RedditPostsMapperService,
      useClass: CorRedditPostsMapperService
    }
  ],
  exports: [RedditPostsService]
})
export class RedditPostsProvidersModule {}
