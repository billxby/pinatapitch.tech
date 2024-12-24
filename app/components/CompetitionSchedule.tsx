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
    <section className="h-full px-8 py-20 md:px-44 md:py-32 3xl:px-52 3xl:py-40">
      <h1
        className={clsx(
          "text-center text-4xl font-black leading-tight md:text-6xl 3xl:text-[5rem]",
          exo2.className
        )}
      >
        The Competition
      </h1>
      <div className="relative flex h-full flex-col items-center">
        <ul className="relative my-12 h-full w-full overflow-y-hidden before:absolute before:left-1/2 before:h-full before:w-1 before:bg-[#D102A8] before:content-[''] 3xl:my-20 3xl:before:w-2">
          {schedule.map((item, index) => {
            const even = index % 2 === 0;
            return (
              <li
                key={index}
                className={clsx(
                  "relative clear-both w-1/2 list-none py-5 before:absolute before:top-8 before:block before:h-2 before:w-2 before:rounded-full before:bg-[#D102A8] before:shadow-[0_0_0_3px_var(--tw-shadow-color)] before:shadow-[#D102A8] before:content-[''] 3xl:py-10 3xl:before:top-14 3xl:before:h-4 3xl:before:w-4",
                  even &&
                    "float-left pr-6 text-right before:-right-[6px] 3xl:before:-right-[12px]",
                  !even &&
                    "float-right ml-2 pl-8 text-left before:-left-[2px] 3xl:before:-left-[4px]"
                )}
              >
                <h3
                  className={clsx(
                    "text-[1.7rem] font-bold 3xl:text-4xl",
                    exo2.className
                  )}
                >
                  {item.subtitle
                    ? even
                      ? `${item.subtitle} - ${item.title}`
                      : `${item.title} - ${item.subtitle}`
                    : item.title}
                </h3>
                <p className="text-xl 3xl:text-3xl">{item.description}</p>
              </li>
            );
          })}
        </ul>
        <p className="text-center text-xl 3xl:text-3xl">
          Got more questions? Visit the{" "}
          <Link href="/faq" className="font-bold underline">
            FAQ Page
          </Link>
          .
        </p>
        <Link href="https://tally.so/r/mYoybd" target="_blank">
          <div className="mt-8 w-fit rounded-full bg-[#D102A8] px-28 py-3 text-center text-xl font-black text-white md:mt-12 md:px-64 3xl:px-96 3xl:py-5 3xl:text-3xl">
            Sign Up
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Schedule;
