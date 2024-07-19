import React, { useState } from "react";
import Spinner from "@/app/components/common/Spinner";
import Link from "next/link";

const LoginForm = ({ handleSubmit, handleInput, isLoading }: any) => {
  const [type, setType] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        autoComplete="off"
        name="email"
        type="search"
        onChange={handleInput}
        placeholder="Email"
        className="input-box focus:outline-none h-10 border-[1px] border-gray-100 w-full rounded-sm px-3"
      />
      <input
        autoComplete="off"
        onClick={() => setType(true)}
        onKeyDown={() => setType(true)}
        type={type ? "password" : "search"}
        name="password"
        onChange={handleInput}
        placeholder="Password"
        className="input-box focus:outline-none h-10 border-[1px] border-gray-100 w-full rounded-sm px-3"
      />
      <p className="flex text-sm">
        Don't have an account?
        <Link href="/auth/register" className="text-lime-600 ml-1">
          Register
        </Link>
      </p>
      {isLoading ? (
        <Spinner fill="fill-[#41a9b2]" />
      ) : (
        <button
          type="submit"
          className="font-bold bg-lime-500 px-7 py-2 rounded-sm w-full text-white uppercase"
        >
          Log In
        </button>
      )}
    </form>
  );
};

export default LoginForm;
