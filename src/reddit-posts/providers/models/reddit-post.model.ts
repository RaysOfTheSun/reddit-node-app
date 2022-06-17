export interface RedditPost {
  id: string;
  title: string;
  badges: string[];
  upvotes: number;
  posterId: string;
  forumId: string;
  downvotes: number;
  creationDate: string;
  totalComments: number;
}
