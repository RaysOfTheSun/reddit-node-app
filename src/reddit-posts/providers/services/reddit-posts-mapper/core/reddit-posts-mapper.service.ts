import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { defaultRedditPost } from 'src/reddit-posts/providers/constants/default-reddit-post.const';
import { RedditPostCreationRequest } from 'src/reddit-posts/providers/models/reddit-post-creation-request.model';
import { RedditPostReplyRequest } from 'src/reddit-posts/providers/models/reddit-post-reply-request.model';
import { RedditPost } from 'src/reddit-posts/providers/models/reddit-post.model';
import { v4 as makeUuid } from 'uuid';

@Injectable()
export class RedditPostsMapperService {
  public mapPostCreationRequestToPost(redditPostCreationRequest: RedditPostCreationRequest): RedditPost {
    return {
      ...this.makeBareRedditPost(),
      title: redditPostCreationRequest.title,
      content: redditPostCreationRequest.body,
      forumId: redditPostCreationRequest.forumId
    };
  }

  public mapPostReplyRequestToPost(redditPostReplyRequest: RedditPostReplyRequest): RedditPost {
    return {
      ...this.makeBareRedditPost(),
      content: redditPostReplyRequest.content,
      parentId: redditPostReplyRequest.parentId
    };
  }

  protected makeBareRedditPost(): RedditPost {
    return {
      id: makeUuid(),
      title: null,
      badges: [],
      content: '',
      upvotes: 0,
      replies: [],
      forumId: null,
      posterId: null,
      downvotes: 0,
      totalComments: 0,
      creationDate: DateTime.now().toJSON()
    };
  }
}
