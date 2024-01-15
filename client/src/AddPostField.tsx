import { BsEmojiSmile } from "react-icons/bs";
import mockAvatar from "./assets/mock-user-avatar.jpg";
import { MdOutlineGifBox } from "react-icons/md";
import { CiCircleList, CiImageOn, CiLocationOn } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import React, { cloneElement, useRef, useState } from "react";

const AddPostField = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const [showCharCounter, setShowCharCounter] = useState(false);
  const [charCounter, setCharCounter] = useState<number>(0);

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
        <form className="flex flex-col w-full">
          <textarea
            className="textarea border-none text-lg resize-y focus:outline-none"
            placeholder="What is happening?!"
            onChange={(e) => setCharCounter(e.target.value.length)}
            onFocus={() => setShowCharCounter(true)}
            onBlur={() => setShowCharCounter(false)}
            ref={ref}
          />
          <div className="flex justify-between items-center px-4">
            <PostFieldActions />
            <div
              className="radial-progress mr-5 main-color"
              style={
                {
                  "--value": charCounter,
                  color: charCounter === 280 ? "red" : "",
                  visibility: showCharCounter ? "visible" : "hidden",
                } as React.CSSProperties
              }
              role="progressbar"
            ></div>
            <button
              type="submit"
              className="btn btn-sm rounded-full bg-sky-500"
            >
              Post
            </button>
          </div>
        </form>
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
