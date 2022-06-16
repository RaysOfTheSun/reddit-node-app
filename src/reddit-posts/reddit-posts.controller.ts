import { Body, Controller, Get, Param, Post, Query, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { RedditPostGetStrategy } from './providers/constants/reddit-post-get-strategy.enum';
import { RedditPostCreationRequest } from './providers/models/reddit-post-creation-request.model';
import { RedditPostsService } from './providers/services/reddit-posts/core/reddit-posts.service';

@Controller('posts')
export class RedditPostsController {
  constructor(private redditPostsService: RedditPostsService) {}

  @Get()
  public async getPostsWithParams(
    @Query() queryParams: Record<RedditPostGetStrategy, string>,
    @Res({ passthrough: true }) response: Response
  ) {
    try {
      return await this.redditPostsService.getPostsByParams(queryParams);
    } catch (e) {
      response.status(400).end();
    }
  }

  @Post()
  public addPostsWithRequest(@Body() postCreationRequest: RedditPostCreationRequest) {
    return this.redditPostsService.createPostWithRequest(postCreationRequest);
  }
}
