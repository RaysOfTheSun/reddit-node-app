import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { RedditPostCreationRequest } from 'src/reddit-posts/providers/models/reddit-post-creation-request.model';
import { RedditPost } from 'src/reddit-posts/providers/models/reddit-post.model';
import { v4 as makeUuid } from 'uuid';

@Injectable()
export class RedditPostsMapperService {
  public mapPostCreationRequestToPost(redditPostCreationRequest: RedditPostCreationRequest): RedditPost {
    return {
      id: makeUuid(),
      badges: [],
      upvotes: 0,
      posterId: '',
      downvotes: 0,
      totalComments: 0,
      creationDate: DateTime.now().toJSON(),
      title: redditPostCreationRequest.title,
      forumId: redditPostCreationRequest.forumId
    };
  }
}
