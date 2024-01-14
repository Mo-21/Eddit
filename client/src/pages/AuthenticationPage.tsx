import { HTMLAttributes } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiThunderSkull } from "react-icons/gi";

const AuthenticationPage = () => {
  const signInMethods: { label: string; value: JSX.Element }[] = [
    { label: "Sign up with Google", value: <FcGoogle size="1.3rem" /> },
    { label: "Sign up with Apple", value: <FaApple size="1.3rem" /> },
  ];

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-evenly items-center w-full h-full">
        <div>
          <GiThunderSkull size="25rem" />
        </div>
        <div className="prose grow-[2]">
          <h1 className="text-white text-6xl">Happening now</h1>
          <h2 className="text-white text-3xl">Join today.</h2>
          <div className="flex flex-col gap-4 p-2 max-w-xs">
            {signInMethods.map((method, index) => (
              <button
                key={index}
                className="flex justify-center items-center gap-2 bg-white text-center rounded-full font-bold text-black p-1.5 tooltip"
                data-tip="This feature is not implemented yet"
              >
                {method.label}
                {method.value}
              </button>
            ))}
            <div className="divider">or</div>
            <button
              onClick={() => {
                const modal = document.getElementById(
                  "sign_up_modal"
                ) as HTMLDialogElement | null;
                if (modal) modal.showModal();
              }}
              className="bg-sky-500 text-white p-1.5 text-center rounded-full font-bold"
            >
              Create account
            </button>
            <div className="text-xs">
              By signing up, you agree to the
              <span className="main-color"> Terms of Service</span> and
              <span className="main-color"> Privacy Policy</span>, including
              <span className="main-color"> Cookie Use</span>.
            </div>
            <div className="flex flex-col">
              <p className="text-white font-bold text-lg">
                Already have an account?
              </p>
              <button
                onClick={() => {
                  const modal = document.getElementById(
                    "sign_in_modal"
                  ) as HTMLDialogElement | null;
                  if (modal) modal.showModal();
                }}
                className="btn btn-outline border-gray-500 rounded-full main-color font-bold"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <SignUpModal id="sign_up_modal" />
      <SignInModal id="sign_in_modal" />
    </div>
  );
};

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

const SignInModal = (id: HTMLAttributes<string | undefined>) => {
  return (
    <dialog id="sign_in_modal" className="modal">
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

export default AuthenticationPage;
