"use client";

import Spinner from "@/app/components/common/Spinner";
import Typewriter from "@/app/components/common/Typewriter";
import LoginForm from "@/app/components/auth/LoginForm";
import { useLoginMutation } from "@/redux/services/authApi";
import { RootState, useAppSelector } from "@/redux/store";
import extractAndDecodeJWT from "@/utils/extractAndDecodeJWT";
import useForm from "@/utils/useForm";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

const Login = () => {
  const navigate = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const { inputs, handleInput } = useForm(["username", "password"]);
  const auth = useAppSelector((state: RootState) => state.auth);
  const token = auth.token as string;
  const isAdmin = auth.isAdmin;
  const [decodingToken, setDecodingToken] = useState(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.password !== "" && inputs.username !== "") {
      await login({ username: inputs.username, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.isAuthenticated) {
            navigate.push("/admin/dashboard");
          }
        })
        .catch((err: any) => {
          console.log("ERROR: ", err);
        });
    }
  };

  useEffect(() => {
    if (token) {
      const tokenIsValid = extractAndDecodeJWT(token);
      if (tokenIsValid && isAdmin) {
        navigate.push("/admin/dashboard");
      }
    }
    setDecodingToken(false);
  }, [token, isAdmin, navigate]);

  return decodingToken ? (
    <div className="min-h-screen w-full flex justify-center pt-36">
      <Spinner fill="fill-[#42a9b3]" wAndH="w-10 h-10" />
    </div>
  ) : (
    <div className="flex flex-col items-center pt-40">
      <div className="flex flex-col px-3 lg:px-0 max-w-96 w-full">
        <Typewriter
          sentence="Login"
          speed={40}
          text="text-zinc-700 font-bold h-5 mb-3"
        />
        <LoginForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
export default Login;
