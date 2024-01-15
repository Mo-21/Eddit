import { HTMLAttributes } from "react";
import JoinMethods from "./JoinMethods";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchemaType, loginSchema } from "../validationSchema";
import ErrorMessage from "./ErrorMessage";
import { useLogin } from "../hooks";
import toast, { Toaster } from "react-hot-toast";

const SignInModal = (id: HTMLAttributes<string | undefined>) => {
  return (
    <dialog id="sign_in_modal" className="modal">
      <div className="modal-box w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-start gap-5 w-full p-8">
          <p className="font-bold text-4xl mb-4">Sign in</p>
          <div className="flex flex-col gap-6 w-full">
            <JoinMethods />
          </div>
          <div className="divider my-4">or</div>
          <div className="flex flex-col gap-2 w-full">
            <SignInForm />
          </div>
          <p>
            Don't have an account?{" "}
            <a className="main-color" href="/">
              Sign up
            </a>
          </p>
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

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const addUser = useLogin();

  if (addUser.isError && addUser.error) toast.error(addUser.error.message);

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => await addUser.mutateAsync(data))}
        className="flex flex-col w-full items-start gap-6"
      >
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className="input-field-styled"
        />
        <ErrorMessage children={errors.email?.message} />

        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className="input-field-styled"
        />
        <ErrorMessage children={errors.password?.message} />

        <button
          disabled={addUser.isPending}
          type="submit"
          className="btn bg-white text-black text-md w-full rounded-full hover:bg-sky-500 mt-4"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default SignInModal;
