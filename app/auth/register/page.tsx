"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/services/authApi";
import useForm from "@/utils/useForm";
import RegisterForm from "@/app/components/auth/RegisterForm";

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const { inputs, handleInput } = useForm(["email", "password"]);
  const navigate = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (inputs.password !== "" && inputs.username !== "") {
      await register({ username: inputs.username, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.accountWasCreated) {
            navigate.push("/admin/dashboard");
          }
        })
        .catch((err: any) => {
          console.log("ERROR: ", err);
        });
    }
  };

  return (
    <div className="flex flex-col px-3 lg:px-0 pt-40 max-w-96 w-full mx-auto">
      <RegisterForm
        handleSubmit={handleRegister}
        handleInput={handleInput}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Register;
