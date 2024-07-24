"use client";

import Spinner from "@/app/components/common/Spinner";
import Typewriter from "@/app/components/common/Typewriter";
import LoginForm from "@/app/components/auth/LoginForm";
import { useLoginMutation } from "@/redux/services/authApi";
import { RootState, useAppSelector } from "@/redux/store";
import extractAndDecodeJWT from "@/utils/extractAndDecodeJWT";
import useForm from "@/utils/useForm";
import { useRouter } from "next/navigation";
import React, { FormEvent, Fragment, useEffect, useState } from "react";
import { BrightSquares } from '@/public/images';
import Link from 'next/link';

const Login = () => {
  const navigate = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const { inputs, handleInput } = useForm(["email", "password"]);
  const auth = useAppSelector((state: RootState) => state.auth);
  const token = auth.token as string;
  const isAdmin = auth.isAdmin;
  const [decodingToken, setDecodingToken] = useState(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.password !== "" && inputs.email !== "") {
      await login({ email: inputs.email, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.isAuthenticated) {
            if (data.isAdmin) {
              navigate.push("/admin/dashboard");
            } else {
              navigate.push("/customer-dashboard/invoices");
            }
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

  return (
    <Fragment>
      <div
        className="w-full py-24 bg-zinc-100 mx-auto flex justify-center flex-col h-[256px]"
        style={{ backgroundImage: `url(${BrightSquares.src})` }}
      >
        <Typewriter
          sentence="Login"
          speed={40}
          text="text-zinc-700 text-4xl font-bold text-center"
        />
        <p className="text-center">
          Don&apos;t have an account?
          <Link href="/auth/register" className="text-lime-600 ml-1">
            Register
          </Link>
        </p>
      </div>
      {decodingToken ? (
        <div className="min-h-screen w-full flex justify-center pt-36">
          <Spinner fill="fill-[#42a9b3]" wAndH="w-10 h-10" />
        </div>
      ) : (
        <div className="flex flex-col items-center py-20">
          <div className="flex flex-col px-3 lg:px-0 max-w-96 w-full">
            <LoginForm
              handleSubmit={handleSubmit}
              handleInput={handleInput}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Login;
