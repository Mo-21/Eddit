import { BsEmojiSmile } from "react-icons/bs";
import mockAvatar from "./assets/mock-user-avatar.jpg";
import { MdOutlineGifBox } from "react-icons/md";
import { CiCircleList, CiImageOn, CiLocationOn } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import { FormEvent, cloneElement, useRef, useState } from "react";
import CharCountProgress from "./components/CharCountProgress";
import { Post, useCreatePost } from "./hooks";

const AddPostField = () => {
  return (
    <div style={{ borderBottomWidth: "1px" }} className="border-gray-700 p-3">
      <div className="flex">
        <div className="user-info">
          <img
            className="rounded-full w-12"
            src={mockAvatar}
            alt="mockAvatar"
          />
        </div>
        <NewPostForm />
      </div>
    </div>
  );
};

const NewPostForm = () => {
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
      id: -1,
      userId: 2,
      content: ref.current.value,
      User: { id: 2, avatar: null, username: "Lama" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const res = await createPost.mutateAsync(data);
    console.log(res);
  };

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
