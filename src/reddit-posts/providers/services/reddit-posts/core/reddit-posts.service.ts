import { Injectable } from '@nestjs/common';
import { RedditPostGetStrategy } from 'src/reddit-posts/providers/constants/reddit-post-get-strategy.enum';
import { RedditPostCreationRequest } from 'src/reddit-posts/providers/models/reddit-post-creation-request.model';
import { RedditPost } from 'src/reddit-posts/providers/models/reddit-post.model';
import { RedditPostsMapperService } from '../../reddit-posts-mapper/core/reddit-posts-mapper.service';

@Injectable()
export abstract class RedditPostsService {
  protected posts: RedditPost[] = [];

  constructor(protected redditPostsMapperService: RedditPostsMapperService) {}

  public async getPostsByParams(redditPostGetParams: Record<RedditPostGetStrategy, string>) {
    if (!redditPostGetParams.postId && !redditPostGetParams.threadId && !redditPostGetParams.userId) {
      throw new Error('');
    }

    if (redditPostGetParams.threadId) {
      return this.getAllPostsByThreadId(redditPostGetParams.threadId);
    }

    if (redditPostGetParams.userId) {
      return this.getPostsByUserId(redditPostGetParams.userId);
    }

    return this.getPostById(redditPostGetParams.postId);
  }

  public getPostById(postId: string) {}

  public getPostsByUserId(userId: string) {
    return `posts for ${userId}`;
  }

  public getAllPostsByThreadId(threadId: string) {
    return this.posts.filter((post) => post.threadId === threadId);
  }

  public async createPostWithRequest(postCreationRequest: RedditPostCreationRequest) {
    const newPost = this.redditPostsMapperService.mapPostCreationRequestToPost(postCreationRequest);
    this.posts.push(newPost);

    return newPost;
  }
}
