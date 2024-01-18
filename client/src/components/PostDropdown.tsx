import { MdMoreHoriz, MdDeleteOutline, FaRegEdit } from "../assets";
import { useGetAllPosts } from "../hooks";
import useAuth from "../services/store";

const PostDropdown = ({ postId }: { postId: number }) => {
  return (
    <div className="dropdown dropdown-left hover:font-normal">
      <MdMoreHoriz tabIndex={0} />
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] list-none shadow rounded-box w-52 bg-gray-800 p-0"
      >
        <li className="p-3 rounded-lg hover:bg-gray-950">
          <DeletePostButton postId={postId} />
        </li>
        <li className="p-3 rounded-lg hover:bg-gray-950">
          <div className="flex gap-2 items-center text-green-500 text-lg">
            <FaRegEdit />
            Edit
          </div>
        </li>
      </ul>
    </div>
  );
};

const DeletePostButton = ({ postId }: { postId: number }) => {
  return (
    <>
      <button
        onClick={() => {
          const modal = document.getElementById(
            "delete_post_modal"
          ) as HTMLDialogElement | null;
          if (modal) modal.showModal();
        }}
        className="flex gap-2 items-center text-red-500 text-lg"
      >
        <MdDeleteOutline />
        Delete
      </button>
      <dialog id="delete_post_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PostDropdown;
