// prettier-ignore
import { BsEmojiSmile, CiCircleList, CiImageOn, CiLocationOn, LuCalendarClock, MdOutlineGifBox } from "./assets";
import defaultAvatar from "./assets/default-twitter-avatar.png";
import { FormEvent, cloneElement, useEffect, useRef, useState } from "react";
import CharCountProgress from "./components/CharCountProgress";
import { useCreatePost } from "./hooks";
import toast, { Toaster } from "react-hot-toast";
import { Post } from "./services/postService";
import useAuth from "./services/store";
import { UserResponse } from "./services/authService";

const AddPostField = () => {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div style={{ borderBottomWidth: "1px" }} className="border-gray-700 p-3">
      <div className="flex">
        <div className="user-info">
          <img
            className="rounded-full w-12"
            src={user.avatar || defaultAvatar}
            alt="defaultAvatar"
          />
        </div>
        <NewPostForm user={user} />
      </div>
    </div>
  );
};

const NewPostForm = ({ user }: { user: UserResponse }) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const [showCharCounter, setShowCharCounter] = useState(false);
  const [charCounter, setCharCounter] = useState<number>(0);

  const createPost = useCreatePost(() => {
    if (ref.current) ref.current.value = "";
  });

  const handleSubmission = async (e: FormEvent) => {
    e.preventDefault();
    if (!ref.current) return;
    const data: Post = {
      id: "-1",
      userId: user.id,
      content: ref.current.value,
      User: { id: user.id, avatar: user.avatar, username: user.username },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await createPost.mutateAsync(data);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    if (createPost.isError) {
      toast.error(createPost.error.message);
    }
  }, [createPost.isError, createPost.error?.message]);

  return (
    <form onSubmit={handleSubmission} className="flex flex-col w-full">
      <textarea
        className="textarea border-none text-lg resize-y focus:outline-none"
        placeholder="What is happening?!"
        onChange={(e) => setCharCounter(e.target.value.length)}
        onFocus={() => setShowCharCounter(true)}
        onBlur={() => setShowCharCounter(false)}
        maxLength={280}
        ref={ref}
      />
      <div className="flex justify-between items-center px-4">
        <PostFieldActions />
        <CharCountProgress count={charCounter} isShown={showCharCounter} />
        <button type="submit" className="btn btn-sm rounded-full bg-sky-500">
          Post
        </button>
      </div>
      <Toaster />
    </form>
  );
};

const PostFieldActions = () => {
  const icons: JSX.Element[] = [
    <CiImageOn />,
    <MdOutlineGifBox />,
    <CiCircleList />,
    <BsEmojiSmile />,
    <LuCalendarClock />,
    <CiLocationOn />,
  ].map((icon, index) =>
    cloneElement(icon, {
      key: index,
      size: "1.3rem",
      className: "main-color",
    })
  );

  return (
    <div className="flex-grow flex justify-start gap-5">
      {icons.map((icon) => icon)}
    </div>
  );
};

export default AddPostField;
