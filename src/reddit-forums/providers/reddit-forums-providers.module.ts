import { Module } from '@nestjs/common';
import { RedditForumsService } from './services/reddit-forums/core/reddit-forums.service';
import { CorRedditForumsService } from './services/reddit-forums/cor/cor-reddit-forums.service';

@Module({
  providers: [
    {
      provide: RedditForumsService,
      useClass: CorRedditForumsService
    }
  ]
})
export class RedditForumsProvidersModule {}
