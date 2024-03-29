// prettier-ignore
import { CgSoftwareUpload, FaRetweet, GoHeart, IoIosStats, LuDot, TbMessageCircle2 } from "../assets";
import defaultAvatar from "../assets/default-twitter-avatar.png";
import { getTwitterTime } from "twitter-time";
import { cloneElement, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import PostDropdown from "./PostDropdown";
import useAuth from "../services/store";
import { Post } from "../services/postService";
import axios from "axios";

interface Props {
  posts: Post[] | undefined;
  hasNextPage: boolean;
  error: Error | null;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchNextPage: any;
  isFetchingNextPage: boolean;
}

const Posts = ({ props }: { props: Props }) => {
  const { user } = useAuth();
  if (props.isLoading) return <div>Loading...</div>;
  if (props.error) return <div>{props.error.message}</div>;
  return (
    <div>
      {props.posts?.map((post) => (
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
                  src={post.User.avatar || defaultAvatar}
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
            {post.userId === user?.id ? (
              <div className="hover-effect text-2xl">
                <PostDropdown userId={user.id} postId={post.id} />
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="text-lg text-white">{post.content}</p>
          <PostActions post={post} userId={user?.id} />
        </div>
      ))}

      {props.hasNextPage && (
        <div className="flex">
          <button
            disabled={props.isFetchingNextPage}
            className="btn flex-grow"
            onClick={() => props.fetchNextPage()}
          >
            {props.isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

interface PostActionsProps {
  post: Post;
  userId: string | undefined;
}

const PostActions = ({ post, userId }: PostActionsProps) => {
  const [likes, setLikes] = useState(post.likers.length);
  const [liked, setLiked] = useState<boolean>(
    post.likers.includes({ id: userId ? userId : "-1" })
  );

  if (!userId) return;

  const likePost = async () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
    const data = {
      userId,
      postId: post.id,
    };
    try {
      await axios.put(`/api/post/${post.id}/like`, data);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  const actions: JSX.Element[] = [
    <TbMessageCircle2 />,
    <FaRetweet />,
    <div onClick={likePost}>
      <div>{likes}</div>
      <GoHeart />
    </div>,
    <IoIosStats />,
    <CgSoftwareUpload />,
  ];

  const actionsWithClassName = actions.map((action, index) =>
    cloneElement(action, {
      key: index,
      size: "1.6rem",
      className: classNames({
        "hover-effect p-1 flex items-center gap-2": true,
        "hover:bg-sky-700": index !== 1 && index !== 2,
        "hover:bg-green-600": index === 1,
        "hover:bg-rose-600": index === 2,
      }),
    })
  );

  return <div className="flex justify-between">{actionsWithClassName}</div>;
};

export default Posts;
