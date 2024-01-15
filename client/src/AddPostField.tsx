import { BsEmojiSmile } from "react-icons/bs";
import mockAvatar from "./assets/mock-user-avatar.jpg";
import { MdOutlineGifBox } from "react-icons/md";
import { CiCircleList, CiImageOn, CiLocationOn } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import { cloneElement } from "react";

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
        <div className="flex flex-col w-full">
          <textarea
            className="textarea border-none text-lg resize-none focus:outline-none"
            placeholder="What is happening?!"
          />
          <div className="flex justify-between px-4">
            <PostFieldActions />
            <button className="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </div>
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
      size: "1.4rem",
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
