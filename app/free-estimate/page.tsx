"use client";

import { BrightSquares } from "@/public/images";
import React from "react";

const FreeEstimate = () => {
  return (
    <div>
      <div
        className="w-full py-24 bg-zinc-100 "
        style={{ backgroundImage: `url(${BrightSquares.src})` }}
      >
        <h1 className="text-4xl font-bold text-center mb-2">Free Estimate</h1>
        <p className="text-zinc-600 text-center">
          To get started, simply give us a call or fill out our free estimate
          form
        </p>
      </div>
      <form className="flex flex-col w-full mx-auto max-w-screen-sm gap-8 my-20 px-3">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex flex-col w-full">
            <label
              className="text-lime-600 font-semibold text-sm mb-1"
              htmlFor="firstName"
            >
              First Name*
            </label>
            <input
              name="firstName"
              type="text"
              alt="Freshcuts"
              className="h-14 bg-gray-100 w-full rounded-sm focus:outline-none pl-4"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className="text-lime-600 font-semibold text-sm mb-1"
              htmlFor="lastName"
            >
              Last Name*
            </label>
            <input
              name="lastName"
              type="text"
              alt="Freshcuts"
              className="h-14 bg-gray-100 w-full rounded-sm focus:outline-none pl-4"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex flex-col w-full">
            <label
              className="text-lime-600 font-semibold text-sm mb-1"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              name="email"
              type="text"
              alt="Freshcuts"
              className="h-14 bg-gray-100 w-full rounded-sm focus:outline-none pl-4"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className="text-lime-600 font-semibold text-sm mb-1"
              htmlFor="firstName"
            >
              Phone number*
            </label>
            <input
              name="phoneNumber"
              type="tel"
              alt="Freshcuts"
              className="h-14 bg-gray-100 w-full rounded-sm focus:outline-none pl-4"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            className="text-lime-600 font-semibold text-sm mb-1"
            htmlFor="firstName"
          >
            Message*
          </label>
          <textarea
            name="message"
            rows={10}
            className=" bg-gray-100 w-full rounded-sm focus:outline-none pl-4 pt-3"
          ></textarea>
        </div>
        <button className="uppercase bg-lime-400 text-white px-8 py-3 w-full font-bold hover:bg-lime-500 duration-200">Request your free estimate</button>
      </form>
    </div>
  );
};

export default FreeEstimate;
