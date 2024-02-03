import AddPostField from "./AddPostField";
import Posts from "./components/Posts";
import { useGetAllPosts } from "./hooks";

const Feed = () => {
  const pageSize = 5;
  const {
    data: posts,
    hasNextPage,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetAllPosts(pageSize);

  const props = {
    posts,
    hasNextPage,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  };

  return (
    <div role="tablist" className="tabs tabs-bordered w-full overflow-y-auto">
      <AddPostField />
      <Posts props={props} />
    </div>
  );
};

export default Feed;
