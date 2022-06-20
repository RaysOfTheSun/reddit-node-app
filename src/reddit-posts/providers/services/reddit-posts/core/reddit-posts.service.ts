import { Injectable } from '@nestjs/common';
import { redditPostFetchStrategyToPropertyMap } from 'src/reddit-posts/providers/constants/reddit-post-fetch-strategy-to-property-map.const';
import { RedditPostFetchStrategy } from 'src/reddit-posts/providers/constants/reddit-post-get-strategy.enum';
import { RedditPostCreationRequest } from 'src/reddit-posts/providers/models/reddit-post-creation-request.model';
import { RedditPostReplyRequest } from 'src/reddit-posts/providers/models/reddit-post-reply-request.model';
import { RedditPost } from 'src/reddit-posts/providers/models/reddit-post.model';
import { RedditPostsMapperService } from '../../reddit-posts-mapper/core/reddit-posts-mapper.service';

@Injectable()
export abstract class RedditPostsService {
  protected posts: RedditPost[] = [];

  constructor(protected redditPostsMapperService: RedditPostsMapperService) {}

  public async getPostsByParams(
    requestValues: Record<RedditPostFetchStrategy, string[]>,
    fetchStrategy = RedditPostFetchStrategy.BY_FORUM_ID
  ) {
    const filterProperty = redditPostFetchStrategyToPropertyMap.get(fetchStrategy);

    const filterValues = Array.isArray(requestValues[filterProperty])
      ? requestValues[filterProperty]
      : [requestValues[filterProperty]];

    return this.posts.filter((redditPost) => filterValues.includes(redditPost[filterProperty]));
  }

  public async createPostWithRequest(postCreationRequest: RedditPostCreationRequest) {
    const newPost = this.redditPostsMapperService.mapPostCreationRequestToPost(postCreationRequest);
    this.posts.push(newPost);

    return newPost;
  }

  public async replyToPostWithRequest(postReplyRequest: RedditPostReplyRequest) {
    const targetPostIndex = this.posts.findIndex((post) => post.id === postReplyRequest.parentId);
    const targetPost = this.posts[targetPostIndex];

    const replyAsPost = this.redditPostsMapperService.mapPostReplyRequestToPost(postReplyRequest);

    const updatedPost: RedditPost = {
      ...targetPost,
      replies: [...targetPost.replies, replyAsPost.id],
      totalComments: targetPost.totalComments + 1
    };

    this.posts.push(replyAsPost);
    this.posts.splice(targetPostIndex, 1, updatedPost);
  }
}
