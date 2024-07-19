import {
  faCalendar,
  faCheckCircle,
  faDashboard,
  faLeaf,
  faTrophy,
  faWalkieTalkie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const whyChooseUsData = [
  {
    icon: faLeaf,
    title: "Specialized Company",
    text: "We are a landscaping company specialize in residential and commercial landscaping",
  },
  {
    icon: faCheckCircle,
    title: "Licensed & Insured",
    text: "All our landscapers are fully licensed, bonded and insured for their safety",
  },
  {
    icon: faDashboard,
    title: "Dependable Services",
    text: "We love to take pride in the work we do. Each project is finished in time and budget",
  },
  {
    icon: faCalendar,
    title: "Day Scheduling",
    text: "We schedule regular appointments to visit your property on the same day and time of the week",
  },
  {
    icon: faWalkieTalkie,
    title: "Free Consultations",
    text: "We offer free consultations for our services, and will provide you with an actual quote",
  },
  {
    icon: faTrophy,
    title: "Reputable Company",
    text: "Operating for more than 30 years, earning a reputation for service and beautiful work",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full mb-20 px-3">
      <div className="w-full max-w-screen-xl mx-auto">
        <h1 className="text-4xl text-zinc-700 mb-8">
          Why{" "}
          <span className="font-semibold text-lime-400 mb-3">Choose Us?</span>
        </h1>
        <div className="grid grid-cols-12 gap-8">
          {whyChooseUsData.map((obj: any, i: number) => (
            <div
              key={i}
              className="col-span-12 md:col-span-4 p-6 border-[1px] border-zinc-200 rounded-md"
            >
              <div className="flex items-center mb-3">
                <FontAwesomeIcon
                  icon={obj.icon}
                  className="text-lime-500 mr-3 text-2xl"
                />
                <h1 className="text-lg">{obj.title}</h1>
              </div>
              <p className="text-sm text-zinc-500">{obj.text}</p>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default WhyChooseUs;
