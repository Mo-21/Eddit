import { HTMLAttributes } from "react";

const SignUpModal = (id: HTMLAttributes<string | undefined>) => {
  return (
    <dialog id="sign_up_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

const SignUpForm = () => {};

export default SignUpModal;