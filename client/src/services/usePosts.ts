import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePosts = (userId?: string | undefined) => {
  const fetchPosts = () =>
    axios.get<Post[]>("/api/post/all").then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: userId ? ["posts", userId] : ["posts"],
    queryFn: fetchPosts,
    staleTime: 10 * 1000,
  });
};

interface Post {
  id: number;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export default usePosts;
