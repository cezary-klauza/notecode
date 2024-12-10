"use client";

import { addCode } from "@/lib/db";
import Image from "next/image";
import { FC, useState } from "react";

type ShareButtonProps = React.ComponentProps<"button"> & {
  code: string;
  lang: string;
  setError: (error: string) => void;
  setUuid: (uuid: string, savedCode: string) => void;
};

export const ShareButton: FC<ShareButtonProps> = ({
  code,
  lang,
  setError,
  setUuid,
  ...props
}) => {
  const clickHandler = async () => {
    const res = await addCode(code, lang);

    if (res === false) {
      setError("Cannot add code to the database. Try later.");
    } else {
      setUuid(res, code);
      setError("");
    }
  };
  return (
    <button
      className="bg-blue disabled:bg-gray-1 text-white flex items-center gap-2 px-6 py-3 rounded-full relative"
      onClick={clickHandler}
      {...props}
    >
      <Image src="/Share.svg" alt="share" width={16} height={16} />
      Share
    </button>
  );
};

type UuidCopyProps = React.ComponentProps<"button"> & {
  uuid: string;
};

export const UuidCopy: FC<UuidCopyProps> = ({ uuid }) => {
  const [message, setMessage] = useState("");
  const clickHandler = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/${uuid}`);
      setMessage("Link copied succesfully!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage("Cannot copy link.");
    }
  };
  return (
    <button
      className="flex gap-0.5 items-center max-w-40 relative"
      onClick={clickHandler}
    >
      {message !== "" && (
        <p className="absolute left-0 bottom-full mb-2 px-4 py-2 bg-gray-2 text-sm w-max rounded-full animate-disapper">
          {message}
        </p>
      )}

      <Image src="/link.svg" alt="copy link" width={24} height={24} />
      <p className="line-clamp-1 text-gray-1">.../{uuid}</p>
    </button>
  );
};
