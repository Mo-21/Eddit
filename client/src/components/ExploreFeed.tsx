import defaultAvatar from "../assets/default-twitter-avatar.png";
import { getTwitterTime } from "twitter-time";
import { MdMoreHoriz } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { CgSoftwareUpload } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { TbMessageCircle2 } from "react-icons/tb";
import { cloneElement } from "react";
import classNames from "classnames";
import { usePosts } from "../hooks";

const ExploreFeed = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {posts?.map((post) => (
        <div
          style={{ borderBottomWidth: "1px" }}
          className="prose border-gray-700 p-3 min-w-full"
          key={post.id}
        >
          <div className="flex items-center justify-between max-h-12">
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
          <p className="text-lg text-white">{post.content}</p>
          <PostActions />
        </div>
      ))}
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

  console.log(actionsWithClassName);

  return <div className="flex justify-between">{actionsWithClassName}</div>;
};

export default ExploreFeed;
