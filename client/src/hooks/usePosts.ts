import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/APIClient";

export const useGetAllPosts = (userId?: string | undefined) => {
  const api = new APIClient<Post[]>("/post/all");

  return useQuery<Post[], Error>({
    queryKey: userId ? ["posts", userId] : ["posts"],
    queryFn: api.getAllPosts,
    staleTime: 10 * 1000,
  });
};

export const useCreatePost = (clearText: () => void) => {
  const api = new APIClient<Post>("/post/create");
  const queryClient = useQueryClient();

  return useMutation<Post, Error, Post, NewPostContext>({
    mutationKey: ["posts"],
    mutationFn: api.createPost,
    onMutate: (newPostData) => {
      const previousPosts = queryClient.getQueryData<Post[]>(["posts"]) || [];
      queryClient.setQueryData<Post[]>(["posts"], (oldPosts) => [
        newPostData,
        ...(oldPosts || []),
      ]);
      clearText();
      return { previousPosts };
    },
    onSuccess: (newPost, content) => {
      queryClient.setQueryData<Post[]>(["posts"], (posts) =>
        posts?.map((post) => (post === content ? newPost : post))
      );
    },
    onError: (Error, content, ctx) => {
      if (!ctx) return;
      return queryClient.setQueryData(["posts"], ctx.previousPosts);
    },
  });
};

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

interface NewPostContext {
  previousPosts: Post[];
}
