import { MdMoreHoriz } from "../assets";

const UserActions = () => {
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
        className="dropdown-content w-full z-[1] menu p-2 mb-2 shadow rounded-box box"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default UserActions;
