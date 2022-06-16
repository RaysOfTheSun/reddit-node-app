import { Injectable } from '@nestjs/common';
import { RedditPostsMapperService } from '../core/reddit-posts-mapper.service';

@Injectable()
export class CorRedditPostsMapperService extends RedditPostsMapperService {}
