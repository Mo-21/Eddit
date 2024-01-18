// prettier-ignore
import { CgSoftwareUpload, FaRetweet, GoHeart, IoIosStats, LuDot, TbMessageCircle2 } from "../assets";
import defaultAvatar from "../assets/default-twitter-avatar.png";
import { getTwitterTime } from "twitter-time";
import { cloneElement } from "react";
import classNames from "classnames";
import { useGetAllPosts } from "../hooks";
import { Link } from "react-router-dom";
import PostDropdown from "./PostDropdown";

const ExploreFeed = () => {
  const pageSize = 5;
  const {
    data: posts,
    hasNextPage,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetAllPosts(pageSize);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {posts?.map((post, index) => (
        <div
          style={{ borderBottomWidth: "1px" }}
          className="prose border-gray-700 p-3 min-w-full"
          key={post.id}
        >
          <div className="flex items-center justify-between max-h-12">
            <div className="flex gap-2 items-center">
              <Link to="/profile">
                <img
                  className="rounded-full w-12"
                  src={defaultAvatar}
                  alt="defaultAvatar"
                />
              </Link>
              <div className="font-bold text-white p-1">
                {post.User.username}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                @{post.User.username} <LuDot /> {getTwitterTime(post.createdAt)}
              </div>
            </div>
            <div className="hover-effect text-2xl">
              <PostDropdown postId={post.id} />
            </div>
          </div>
          <p className="text-lg text-white">{post.content}</p>
          <PostActions />
        </div>
      ))}

      {hasNextPage && (
        <div className="flex">
          <button
            disabled={isFetchingNextPage}
            className="btn flex-grow"
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

const PostActions = () => {
  const actions: JSX.Element[] = [
    <TbMessageCircle2 />,
    <FaRetweet />,
    <GoHeart />,
    <IoIosStats />,
    <CgSoftwareUpload />,
  ];

  const actionsWithClassName = actions.map((action, index) =>
    cloneElement(action, {
      key: index,
      size: "1.6rem",
      className: classNames({
        "hover-effect p-1": true,
        "hover:bg-sky-700": index !== 1 && index !== 2,
        "hover:bg-green-600": index === 1,
        "hover:bg-rose-600": index === 2,
      }),
    })
  );

  return <div className="flex justify-between">{actionsWithClassName}</div>;
};

export default ExploreFeed;
