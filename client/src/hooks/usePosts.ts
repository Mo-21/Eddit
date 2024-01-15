import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllPosts = (userId?: string | undefined) => {
  const fetchPosts = () =>
    axios.get<Post[]>("/api/post/all").then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: userId ? ["posts", userId] : ["posts"],
    queryFn: fetchPosts,
    staleTime: 10 * 1000,
  });
};

export const useCreatePost = (clearText: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, Post, NewPostContext>({
    mutationKey: ["posts"],
    mutationFn: (data) =>
      axios.post<Post>("/api/post/create", data).then((res) => res.data),
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
