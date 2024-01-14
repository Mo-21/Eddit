import usePosts from "../services/usePosts";
import defaultAvatar from "../assets/default-twitter-avatar.png";
import { getTwitterTime } from "twitter-time";
import { MdMoreHoriz } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const ExploreFeed = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {posts?.map((post) => (
        <div className="prose" key={post.id}>
          <div className="flex gap-2 items-center justify-between max-h-14">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full w-12"
                src={defaultAvatar}
                alt="defaultAvatar"
              />
              <div className="font-bold text-white p-1 hover-effect">
                {post.User.username}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                @{post.User.username} <LuDot /> {getTwitterTime(post.createdAt)}
              </div>
            </div>
            <div className="hover-effect p-1 text-2xl">
              <MdMoreHoriz />
            </div>
          </div>
          <p>{post.content}</p>
          <div className="divider"></div>
        </div>
      ))}
    </div>
  );
};

export default ExploreFeed;
