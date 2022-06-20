export interface RedditPost {
  id: string;
  title: string;
  content: string;
  badges: string[];
  replies: string[];
  upvotes: number;
  posterId: string;
  forumId: string;
  parentId?: string;
  downvotes: number;
  creationDate: string;
  totalComments: number;
}
