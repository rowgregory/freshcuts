
import React, { Fragment, useState } from "react";
import Typewriter from '../common/Typewriter';
import { Spinner } from '@chakra-ui/react';

const RegisterForm = ({ handleSubmit, handleInput, isLoading }: any) => {
  const [type, setType] = useState(false);

  return (
    <Fragment>
      <Typewriter
        sentence="Register: "
        speed={40}
        text="text-sm text-zinc-700 font-bold h-5"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
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
          name="password"
          type={type ? "password" : "search"}
          onChange={handleInput}
          placeholder="Password"
          className="input-box focus:outline-none h-10 border-[1px] border-gray-100 w-full rounded-sm px-3"
        />

        {isLoading ? (
          <Spinner fill="fill-[#41a9b2]" />
        ) : (
          <button
            type="submit"
            className="font-bold bg-lime-500 px-7 py-2 rounded-sm w-full text-white uppercase"
          >
            Register
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default RegisterForm;
