import { Module } from '@nestjs/common';
import { RedditPostsModule } from './reddit-posts/reddit-posts.module';
import { RedditThreadsModule } from './reddit-threads/reddit-threads.module';
import { RedditUsersModule } from './reddit-users/reddit-users.module';

@Module({
  imports: [RedditPostsModule, RedditThreadsModule, RedditUsersModule]
})
export class AppModule {}
