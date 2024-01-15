import APIClient from "./APIClient";

export interface Post {
  id: number;
  content: string;
  userId: number;
  User: {
    avatar: string | null;
    username: string;
    id: number;
  };
  createdAt: string;
  updatedAt: string;
}

export const getPosts = new APIClient<Post[]>("/post/all");
export const createPosts = new APIClient<Post>("/post/create");
