import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiThunderSkull } from "react-icons/gi";

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
            <button className="flex justify-center items-center gap-1 bg-white rounded-full text-black p-1.5">
              <FcGoogle size="1.3rem" />
              Sign up with Google
            </button>
            <button className="flex justify-center items-center gap-2 bg-white text-center rounded-full font-bold text-black p-1.5">
              <FaApple size="1.3rem" />
              Sign up with Apple
            </button>
            <div className="divider">or</div>
            <button className="bg-sky-500 text-white p-1.5 text-center rounded-full">
              Create account
            </button>
            <div className="text-xs">
              By signing up, you agree to the
              <span className="text-sky-500"> Terms of Service</span> and
              <span className="text-sky-500"> Privacy Policy</span>, including
              <span className="text-sky-500"> Cookie Use</span>.
            </div>
            <div className="flex flex-col">
              <p className="text-white font-bold text-lg">
                Already have an account?
              </p>
              <button className="btn btn-outline border-gray-500 rounded-full text-sky-500 font-bold">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
