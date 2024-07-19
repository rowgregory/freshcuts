"use client";

import useForm from "@/utils/useForm";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const About = () => {
  const { handleInput } = useForm(["name", "email", "type", "message"]);

  return (
    <div className="w-full mb-20 px-3">
      <div className="grid grid-cols-12 gap-8 w-full max-w-screen-xl mx-auto">
        <div className="col-span-12 md:col-span-6">
          <h1 className="text-4xl text-zinc-700">
            About{" "}
            <span className="font-semibold text-lime-400 mb-3">
              Our Company
            </span>
          </h1>
          <div className="h-[1px] w-full bg-zinc-200 mt-3 mb-5"></div>
          <p className="text-zinc-500 text-sm leading-6 mb-3">
            At pH Lawn Care we have over 80 years of combined experience in the lawn care industry working with both residential and commercial clients. We combine quality work and affordable service offerings to bring your lawn back to life. We provide customized services to ensure we meet your specific lawn care and pest control needs.
          </p>
          <p className="text-zinc-500 text-sm leading-6 mb-3">
            Our team at pH Lawn Care is dedicated to finding solutions to your lawn care and pest control problems so you’ll have a beautiful landscape for years to come.
          </p>
          <p className="text-zinc-500 text-sm leading-6 mb-7">
            Fill out the form today for your free estimate!
          </p>
          <Link
            href="/about"
            className="flex items-center text-lime-500 font-bold text-sm uppercase"
          >
            More About Us
            <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-2" />
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 border-4 border-zinc-200 px-7 py-8">
          <h1 className="text-3xl text-zinc-700 text-center">
            Request{" "}
            <span className="font-semibold text-lime-400 mb-3">
              An Estimate
            </span>
          </h1>
          <div className="h-[1px] w-full bg-zinc-200 mt-3 mb-5"></div>
          <form className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex flex-col justify-between w-full">
                <input
                  name="name"
                  onChange={handleInput}
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 border-[1px] border-zinc-300 bg-zinc-50 focus:outline-none"
                />
                <input
                  name="email"
                  onChange={handleInput}
                  type="text"
                  placeholder="Your Email"
                  className="px-4 py-3 border-[1px] border-zinc-300 bg-zinc-50 focus:outline-none"
                />
                <select
                  name="type"
                  onChange={handleInput} id="select"
                  className="px-4 py-3 border-[1px] border-zinc-300 bg-zinc-50 focus:outline-none"
                >
                  <option value="">Choose One</option>
                  <option value="landscapeMaintenance">
                    Landscape Maintenance
                  </option>
                  <option value="Enhancement Services">
                    Enhancement Services
                  </option>
                  <option value="Irrigation Services">
                    Irrigation Services
                  </option>
                </select>
              </div>
              <textarea
                name="message"
                onChange={handleInput}
                rows={7}
                className="w-full px-4 py-3 border-[1px] border-zinc-300 bg-zinc-50 focus:outline-none"
                placeholder='Your Message'
              ></textarea>
            </div>
            <button className="px-4 py-2 font-semibold mt-5 bg-lime-500 text-white text-sm uppercase flex self-end">
              Request a Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;