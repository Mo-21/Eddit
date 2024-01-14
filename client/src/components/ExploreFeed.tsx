import usePosts from "../services/usePosts";

const ExploreFeed = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>{post.content}</div>
      ))}
    </div>
  );
};

export default ExploreFeed;
