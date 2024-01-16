import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpSchemaType, signUpSchema } from "../validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "./ErrorMessage";
import { useRegister } from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const SignUpModal = (id: HTMLAttributes<string | undefined>) => {
  return (
    <dialog id="sign_up_modal" className="modal">
      <div className="modal-box w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-start gap-5 w-full p-8">
          <p className="font-bold text-4xl mb-4">Register</p>
          <div className="flex flex-col gap-2 w-full">
            <SignUpForm />
          </div>
          <p>
            Don't have an account?{" "}
            <a className="main-color" href="/">
              Sign in
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

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const registerUser = useRegister();

  if (registerUser.isError && registerUser.error)
    toast.error(registerUser.error.message);

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit(
          async (data) => await registerUser.mutateAsync(data)
        )}
        className="flex flex-col w-full items-start gap-6"
      >
        {/* <input
        {...register("avatar")}
        type="file"
        className="file-input w-full max-w-xs"
      /> */}

        <input
          {...register("username")}
          placeholder="Username"
          type="text"
          className="input-field-styled"
        />
        <ErrorMessage children={errors.username?.message} />

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

        <input
          {...register("passwordConfirmation")}
          placeholder="Confirm password"
          type="password"
          className="input-field-styled"
        />
        {errors.passwordConfirmation && (
          <ErrorMessage children={errors.passwordConfirmation.message} />
        )}

        <button
          disabled={registerUser.isPending}
          type="submit"
          className="btn bg-white text-black text-md w-full rounded-full hover:bg-sky-500 mt-4"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpModal;
