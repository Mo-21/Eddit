import APIClient from "./APIClient";

export interface Post {
  id: string;
  content: string;
  userId: string;
  User: {
    avatar: string | null;
    username: string;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const post = new APIClient<Post, Post>("/post");
