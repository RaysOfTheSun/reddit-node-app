import { Injectable } from '@nestjs/common';
import { RedditForumsService } from '../core/reddit-forums.service';

@Injectable()
export class CorRedditForumsService extends RedditForumsService {}
