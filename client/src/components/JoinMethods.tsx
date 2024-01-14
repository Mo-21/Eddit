import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const JoinMethods = () => {
  const signInMethods: { label: string; value: JSX.Element }[] = [
    { label: "Sign up with Google", value: <FcGoogle size="1.3rem" /> },
    { label: "Sign up with Apple", value: <FaApple size="1.3rem" /> },
  ];
  return (
    <>
      {signInMethods.map((method, index) => (
        <button
          key={index}
          className="flex justify-center items-center gap-2 bg-white text-center rounded-full font-bold text-black p-1.5 tooltip"
          data-tip="This feature is not implemented yet"
        >
          {method.value}
          {method.label}
        </button>
      ))}
    </>
  );
};

export default JoinMethods;
