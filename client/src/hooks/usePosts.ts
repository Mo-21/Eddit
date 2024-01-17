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

interface QueryData {
  pageParam: number[];
  pages: InfinitePosts[];
}

export const useGetAllPosts = (query: PostQuery) =>
  useInfiniteQuery<InfinitePosts, Error, Post[]>({
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
    select: (data) => data.pages.flatMap((page) => page.posts),
  });

export const useCreatePost = (clearText: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, Post, NewPostContext>({
    mutationKey: ["posts"],
    mutationFn: createPosts.createPost,
    onMutate: async (newPostData) => {
      const previousData = queryClient.getQueryData<QueryData>(["posts"]) || {
        pageParam: [1],
        pages: [{ posts: [], hasMore: true }],
      };
      const updatedData: QueryData = {
        ...previousData,
        pages: [
          {
            posts: [newPostData, ...previousData.pages[0].posts],
            hasMore: previousData.pages[0].hasMore,
          },
          ...previousData.pages.slice(1), // Keep the rest of the pages unchanged
        ],
      };
      queryClient.setQueryData<QueryData>(["posts"], updatedData);
      clearText();
      // Return the previous state for potential rollback on error
      return { previousPosts: previousData.pages[0].posts };
    },
    onSuccess: (newPost, content) => {
      queryClient.setQueryData<QueryData>(["posts"], (data) => {
        if (!data) return data;

        const updatedData: QueryData = {
          ...data,
          pages: [
            {
              posts: data.pages[0].posts.map((post) =>
                post.id === content.id ? newPost : post
              ),
              hasMore: data.pages[0].hasMore,
            },
            ...data.pages.slice(1), // Keep the rest of the pages unchanged
          ],
        };

        return updatedData;
      });
    },
    onError: (error, content, ctx) => {
      if (!ctx) return;
      queryClient.setQueryData<QueryData>(["posts"], (data) => {
        if (!data) return data;
        const previousData: QueryData = {
          ...data,
          pages: [
            {
              posts: ctx.previousPosts,
              hasMore: data.pages[0].hasMore,
            },
            ...data.pages.slice(1),
          ],
        };

        return previousData;
      });
    },
  });
};
