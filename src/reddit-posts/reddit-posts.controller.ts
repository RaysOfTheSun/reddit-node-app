import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { RedditPostFetchStrategy } from './providers/constants/reddit-post-get-strategy.enum';
import { RedditPostCreationRequest } from './providers/models/reddit-post-creation-request.model';
import { RedditPostsService } from './providers/services/reddit-posts/core/reddit-posts.service';

@Controller('posts')
export class RedditPostsController {
  constructor(private redditPostsService: RedditPostsService) {}

  @Get()
  public async getPostsWithParams(
    @Res({ passthrough: true }) response: Response,
    @Query() queryParams: Record<RedditPostFetchStrategy, string[]>,
    @Query('filterBy') postRetrievalStategy: RedditPostFetchStrategy
  ) {
    return this.redditPostsService.getPostsByParams(queryParams, postRetrievalStategy);
  }

  @Post()
  public addPostsWithRequest(@Body() postCreationRequest: RedditPostCreationRequest) {
    return this.redditPostsService.createPostWithRequest(postCreationRequest);
  }
}
