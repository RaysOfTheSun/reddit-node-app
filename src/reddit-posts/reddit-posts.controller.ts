import { Controller, Get, Param } from '@nestjs/common';
import { RedditPostsService } from './providers/services/reddit-posts/core/reddit-posts.service';

@Controller('posts')
export class RedditPostsController {
  constructor(private redditPostsService: RedditPostsService) {}

  @Get(':id')
  public getAllPostsByUserId(@Param('id') userId: string) {
    return this.redditPostsService.getPostsByUserId(userId);
  }
}
