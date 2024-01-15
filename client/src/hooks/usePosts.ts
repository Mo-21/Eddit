import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Post, getPosts, createPosts } from "../services/postService";

export const useGetAllPosts = (userId?: string | undefined) => {
  return useQuery<Post[], Error>({
    queryKey: userId ? ["posts", userId] : ["posts"],
    queryFn: getPosts.getAllPosts,
    staleTime: 10 * 1000,
  });
};

export const useCreatePost = (clearText: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, Post, NewPostContext>({
    mutationKey: ["posts"],
    mutationFn: createPosts.createPost,
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

interface NewPostContext {
  previousPosts: Post[];
}
