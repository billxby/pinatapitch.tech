import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";
import { ScheduleItem } from "../utils/types";

const schedule: ScheduleItem[] = [
  {
    title: "January 6th",
    description: "Online submissions open",
  },
  {
    title: "March 2nd",
    description: "Online submissions close",
  },
  {
    title: "March 30th",
    subtitle: "Online Pitch Round (Top 15)",
    description: "Winning teams are paired with a mentor",
  },
  {
    title: "April 26th",
    description: "The 5 finalists pitch IRL at the Piñata Pitch Conference",
  },
];

const Schedule: React.FC = () => {
  return (
    <section className="h-full px-52 py-40">
      <h1
        className={clsx(
          "text-center text-[5rem] font-black leading-tight",
          exo2.className
        )}
      >
        The Competition
      </h1>
      <div className="relative flex h-full flex-col items-center">
        <ul className="relative my-20 h-full w-full overflow-y-hidden before:absolute before:left-1/2 before:h-full before:w-2 before:bg-[#D102A8] before:content-['']">
          {schedule.map((item, index) => {
            const even = index % 2 === 0;
            return (
              <li
                key={index}
                className={clsx(
                  "relative clear-both w-1/2 list-none py-10 before:absolute before:top-14 before:block before:h-4 before:w-4 before:rounded-full before:bg-[#D102A8] before:shadow-[0_0_0_3px_var(--tw-shadow-color)] before:shadow-[#D102A8] before:content-['']",
                  even && "float-left pr-6 text-right before:-right-3",
                  !even && "float-right ml-2 pl-8 text-left before:-left-1"
                )}
              >
                <h3 className={clsx("text-4xl font-bold", exo2.className)}>
                  {item.subtitle
                    ? even
                      ? `${item.subtitle} - ${item.title}`
                      : `${item.title} - ${item.subtitle}`
                    : item.title}
                </h3>
                <p className="text-3xl">{item.description}</p>
              </li>
            );
          })}
        </ul>
        <p className="text-3xl">
          Got more questions? Visit the{" "}
          <Link href="/faq" className="font-bold underline">
            FAQ Page
          </Link>
          .
        </p>
        <Link href="https://tally.so/r/mYoybd" target="_blank">
          <div className="mt-12 w-fit rounded-full bg-[#D102A8] px-96 py-5 text-center text-3xl font-black text-white">
            Sign Up
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Schedule;
