import { Link } from "react-router-dom";
import { IoPersonOutline, MdMoreHoriz, TbLogout2 } from "../assets";
import { useLogout } from "../hooks/useAuth";
import useAuth from "../services/store";

const UserActions = () => {
  const { queryClient, removeUser } = useLogout();
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="dropdown dropdown-top w-full mb-3 mr-2">
      <div
        tabIndex={0}
        className="flex gap-3 rounded-full p-2 hover:bg-gray-900 transition-colors ease-in-out duration-300"
      >
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col text-lg">
            <div>Lama</div>
            <div className="text-gray-500">@Lama</div>
          </div>
          <div className="mr-3 text-2xl">
            <MdMoreHoriz />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content w-full z-[1] menu p-2 mb-2 shadow rounded-box box text-lg"
      >
        <li>
          <Link
            onClick={() => {
              queryClient.clear();
              removeUser();
            }}
            className="flex items-center text-red-500"
            to="/auth"
          >
            <TbLogout2 />
            Logout
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <IoPersonOutline />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserActions;
