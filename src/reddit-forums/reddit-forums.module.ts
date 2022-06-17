import { Module } from '@nestjs/common';
import { RedditForumsProvidersModule } from './providers/reddit-forums-providers.module';
import { RedditForumsController } from './reddit-forums.controller';

@Module({
  imports: [RedditForumsProvidersModule],
  controllers: [RedditForumsController]
})
export class RedditForumsModule {}
