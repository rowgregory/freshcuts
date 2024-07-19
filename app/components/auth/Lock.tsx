import React, { ChangeEvent, FC, FormEvent, Fragment, RefObject } from "react";
import Typewriter from "@/app/components/common/Typewriter";
import Spinner from '@/app/components/common/Spinner';

interface LockProps {
  inputRef: RefObject<HTMLInputElement>;
  setCode: (code: string) => void;
  code: string;
  handleVerifyCode: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
  success: boolean;
}

const Lock: FC<LockProps> = ({
  inputRef,
  setCode,
  code,
  handleVerifyCode,
  isLoading,
}) => {
  return (
    <Fragment>
      <Typewriter
        sentence="Enter code: "
        speed={40}
        text="text-sm text-zinc-700 font-bold h-5"
      />
      <form
        onSubmit={handleVerifyCode}
        className="flex flex-col items-center gap-4"
      >
        <input
          autoComplete="off"
          ref={inputRef}
          name="code"
          type="search"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
          className="input-box focus:outline-none h-10 border-[1px] border-gray-100 w-full rounded-sm px-3"
        />

        {isLoading ? (
          <Spinner fill="fill-[#41a9b2]" />
        ) : (
          <button
            type="submit"
            disabled={code === ""}
            className={`${code === "" ? "" : "cursor-pointer"} font-bold bg-[#41a9b2] px-7 py-2 rounded-sm w-full text-white uppercase`}
          >
            Submit
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default Lock;
