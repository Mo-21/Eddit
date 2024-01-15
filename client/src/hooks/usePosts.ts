// prettier-ignore
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Post, createPosts } from "../services/postService";
import axios from "axios";

interface NewPostContext {
  previousPosts: Post[];
}

interface PostQuery {
  pageSize: number;
}

interface InfinitePosts {
  posts: Post[];
  hasMore: boolean;
}

export const useGetAllPosts = (query: PostQuery) =>
  useInfiniteQuery<InfinitePosts, Error>({
    queryKey: ["posts"],
    queryFn: async ({ pageParam }) => {
      return await axios
        .get("/api/post/all", {
          params: {
            page: pageParam,
            pageSize: query.pageSize,
          },
        })
        .then((res) => res.data);
    },
    initialPageParam: 1,
    staleTime: 1 * 60 * 1000, // 1 minute
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });

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
