import { HTMLAttributes } from "react";
import JoinMethods from "./JoinMethods";

const SignInModal = (id: HTMLAttributes<string | undefined>) => {
  return (
    <dialog id="sign_in_modal" className="modal">
      <div className="modal-box flex items-center justify-center">
        <div className="flex flex-col justify-center items-start max-w-xl p-8">
          <p className="font-bold text-3xl mb-4">Sign in</p>
          <div className="flex flex-col gap-2">
            <JoinMethods />
          </div>
          <div className="divider my-4">or</div>
        </div>
        <form className="w-0" method="dialog">
          <button className="btn btn-lg btn-circle btn-ghost absolute left-2 top-2">
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

const SignInForm = () => {};

export default SignInModal;
