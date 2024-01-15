import AddPostField from "./AddPostField";
import ExploreFeed from "./components/ExploreFeed";

const Feed = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered w-full overflow-y-auto">
      <AddPostField />
      <ExploreFeed />
    </div>
  );
};

export default Feed;
