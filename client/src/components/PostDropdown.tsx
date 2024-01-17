import { MdMoreHoriz, MdDeleteOutline, FaRegEdit } from "../assets";

const PostDropdown = () => {
  return (
    <div className="dropdown dropdown-left">
      <MdMoreHoriz tabIndex={0} />
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu shadow rounded-box w-52 bg-gray-950"
      >
        <li>
          <div className="text-red-500 text-lg">
            <MdDeleteOutline />
            Delete
          </div>
        </li>
        <li>
          <div className="text-green-500 text-lg">
            <FaRegEdit />
            Edit
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PostDropdown;
