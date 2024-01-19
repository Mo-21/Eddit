import { MdMoreHoriz, MdDeleteOutline, FaRegEdit } from "../assets";
import { post } from "../services/postService";

interface PostActionsProps {
  postId: string;
  userId: string;
}

const PostDropdown = ({ postId, userId }: PostActionsProps) => {
  return (
    <div className="dropdown dropdown-left hover:font-normal">
      <MdMoreHoriz tabIndex={0} />
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] list-none shadow rounded-box w-52 bg-[#18191B] p-0"
      >
        <li className="p-3 rounded-lg hover:bg-gray-950">
          <DeletePostButton userId={userId} postId={postId} />
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

const DeletePostButton = ({ postId, userId }: PostActionsProps) => {
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
          <h3 className="font-bold">Hello!</h3>
          <p className="py-4">Do you really want to delete this tweet?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn text-lg">No</button>
              <button
                onClick={() => {
                  post.deletePost(postId, userId);
                  window.location.reload();
                }}
                className="btn bg-red-800 text-lg"
              >
                Yes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PostDropdown;
