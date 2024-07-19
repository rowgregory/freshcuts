import { BrightSquares } from "@/public/images";
import React from "react";

const Contact = () => {
  return (
    <div className="mb-40">
      <div
        className="w-full py-24 bg-zinc-100"
        style={{ backgroundImage: `url(${BrightSquares.src})` }}
      >
        <h1 className="text-4xl font-bold text-center mb-2">Contact</h1>
        <p className="text-zinc-600 text-center">
          Give us a call or fill in the contact form
        </p>
      </div>
    </div>
  );
};

export default Contact;
