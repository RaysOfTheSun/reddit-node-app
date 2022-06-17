import { Module } from '@nestjs/common';
import { RedditPostsModule } from './reddit-posts/reddit-posts.module';
import { RedditUsersModule } from './reddit-users/reddit-users.module';
import { RedditForumsModule } from './reddit-forums/reddit-forums.module';

@Module({
  imports: [RedditPostsModule, RedditUsersModule, RedditForumsModule]
})
export class AppModule {}
