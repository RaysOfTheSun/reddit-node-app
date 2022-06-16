import { Injectable } from '@nestjs/common';
import { RedditPostsService } from '../core/reddit-posts.service';

@Injectable()
export class CorRedditPostsService extends RedditPostsService {}
