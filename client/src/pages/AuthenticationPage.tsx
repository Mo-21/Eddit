import { GiThunderSkull } from "react-icons/gi";
import SignInModal from "../components/SignInModal";
import SignUpModal from "../components/SignUpModal";
import JoinMethods from "../components/JoinMethods";

const AuthenticationPage = () => {
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
            <JoinMethods />
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

export default AuthenticationPage;
