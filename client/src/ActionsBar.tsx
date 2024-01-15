// prettier-ignore
import { CgMoreO, CiBookmark, GiThunderSkull, GoHomeFill, GrNotification, HiOutlineEnvelope, IoPersonOutline, IoSearchOutline, MdOutlineWorkspacePremium, RiGroupLine } from "./assets";

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
