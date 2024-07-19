"use client";

import { useState } from "react";

const useForm = (fields: any) => {
  const initialInputs = fields.reduce((acc: any, name: string | number) => {
    acc[name] = "";
    return acc;
  }, {});

  const [inputs, setInputs] = useState(initialInputs);

  const handleInput = (e: any) => {
    const { name, value } = e.target;

    setInputs((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    inputs,
    handleInput,
  };
};

export default useForm;
