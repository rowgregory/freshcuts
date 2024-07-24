"use client";

import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/services/authApi";
import useForm from "@/utils/useForm";
import RegisterForm from "@/app/components/auth/RegisterForm";
import Typewriter from '@/app/components/common/Typewriter';
import { BrightSquares } from '@/public/images';
import Link from 'next/link';

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const { inputs, handleInput } = useForm(["email", "password"]);
  const navigate = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (inputs.password !== "" && inputs.email !== "") {
      await register({ email: inputs.email, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.accountWasCreated) {
            if (data.isAdmin) {
              navigate.push("/admin/dashboard");
            } else {
              navigate.push('/customer-dashboard/invoices')
            }
          }
        })
        .catch((err: any) => {
          console.log("ERROR: ", err);
        });
    }
  };

  return (
    <Fragment>
      <div
        className="w-full py-24 bg-zinc-100 mx-auto flex justify-center flex-col h-[256px]"
        style={{ backgroundImage: `url(${BrightSquares.src})` }}
      >
        <Typewriter
          sentence="Register"
          speed={40}
          text="text-zinc-700 text-4xl font-bold text-center"
        />
        <p className="text-center">
          Have an account?
          <Link href="/auth/login" className="text-lime-600 ml-1">
            Login
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center py-20">
        <div className="flex flex-col px-3 lg:px-0 max-w-96 w-full">
          <RegisterForm
            handleSubmit={handleRegister}
            handleInput={handleInput}
            isLoading={isLoading}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
