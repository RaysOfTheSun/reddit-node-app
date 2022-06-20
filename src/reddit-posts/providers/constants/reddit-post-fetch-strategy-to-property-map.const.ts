import { RedditPostFilterableProperty } from './reddit-post-filterable-property.enum';
import { RedditPostFetchStrategy } from './reddit-post-get-strategy.enum';

export const redditPostFetchStrategyToPropertyMap = new Map([
  [RedditPostFetchStrategy.BY_IDS, RedditPostFilterableProperty.POST_ID],
  [RedditPostFetchStrategy.BY_USER_ID, RedditPostFilterableProperty.POSTER_ID],
  [RedditPostFetchStrategy.BY_FORUM_ID, RedditPostFilterableProperty.FORUM_ID]
]);
