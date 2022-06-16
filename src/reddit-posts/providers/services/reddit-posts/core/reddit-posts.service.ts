import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class RedditPostsService {
  public getPostsByUserId(userId: string) {
    return `posts for ${userId}`;
  }
}
