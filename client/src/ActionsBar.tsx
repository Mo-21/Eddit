import { CgMoreO } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { GiThunderSkull } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { GrNotification } from "react-icons/gr";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";

const ActionsBar = () => {
  const actions: { label: string; value: JSX.Element }[] = [
    { label: "", value: <GiThunderSkull size="2.5rem" /> },
    { label: "Home", value: <GoHomeFill /> },
    { label: "Explore", value: <IoSearchOutline /> },
    { label: "Notifications", value: <GrNotification /> },
    { label: "Messages", value: <HiOutlineEnvelope /> },
    { label: "Bookmarks", value: <CiBookmark /> },
    { label: "Community", value: <RiGroupLine /> },
    { label: "Premium", value: <MdOutlineWorkspacePremium /> },
    { label: "Profile", value: <IoPersonOutline /> },
    { label: "More", value: <CgMoreO /> },
  ];

  return (
    <div className="flex flex-col h-full lg:w-56">
      {actions.map((action, index) => (
        <div
          className="flex items-center p-3 m-1 text-2xl gap-2 hover-effect"
          key={index}
        >
          {action.value} {action.label}
        </div>
      ))}
      <button className="btn font-bold bg-sky-500 rounded-full mt-5 btn-xs sm:btn-sm md:btn-md lg:btn-md lg:text-xl hover:bg-sky-800">
        Post
      </button>
    </div>
  );
};

export default ActionsBar;
