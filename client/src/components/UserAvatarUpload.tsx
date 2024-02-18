import * as LR from "@uploadcare/blocks";
import { uploadFile } from "@uploadcare/upload-client";
import { useEffect, useRef } from "react";
import { UseFormSetValue } from "react-hook-form";

LR.registerBlocks(LR);

interface RegisterAvatar {
  setValue: UseFormSetValue<{
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    avatar?: string | null | undefined;
  }>;
}

const UserAvatarUpload = ({ setValue }: RegisterAvatar) => {
  const fileRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleUpload = async () => {
      if (
        !fileRef.current ||
        !fileRef.current.files ||
        !fileRef.current.files.length
      )
        return;

      console.log(fileRef.current.files);
      const fileData = fileRef.current.files[0];
      const result = await uploadFile(fileData, {
        publicKey: import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY,
        store: "auto",
        metadata: {
          subsystem: "js-client",
          pet: "cat",
        },
      });

      setValue("avatar", result.cdnUrl);
    };

    handleUpload();
  }, [setValue]);

  return (
    <input
      type="file"
      accept="image/*"
      className="file-input w-full max-w-xs"
      ref={fileRef}
    />
  );
};

export default UserAvatarUpload;
