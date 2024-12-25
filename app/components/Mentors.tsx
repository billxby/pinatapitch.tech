import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";

import type { Mentor } from "@/app/utils/types";

const mentors: Mentor[] = [
  {
    name: "Myles Shedden",
    biography:
      "Prev. VP @ SkipTheDishes, CFO of Hyperlume & VP at Longbow Capital",
    image: {
      src: "/images/mentors/myles_shedden.jpg",
      height: 430,
      width: 430,
    },
  },
  {
    name: "Mishel Wong",
    biography:
      "Co-Founder of National Wash Network, Director of Sales @ Bo Reusable Package",
    image: {
      src: "/images/mentors/mishel_wong.jpg",
      height: 430,
      width: 430,
    },
  },
  {
    name: "Anaiy Somalwar",
    biography: "Foundation Capital, Pear VC, Harvard Ventures",
    image: {
      src: "/images/mentors/anaiy_somalwar.jpg",
      height: 430,
      width: 430,
    },
  },
  // ...new Array(10).fill({
  //   name: "Santa CLOSED",
  //   biography:
  //     "Nom nom nom yum hohoho cookie coca cola more text to check if its gonna overflow",
  //   link: "https://github.com/adntaha",
  //   image: {
  //     src: "/images/mentors/placeholder_mentor.png",
  //     height: 430,
  //     width: 430,
  //   },
  // }),
] satisfies object[];

const MentorsJudges: React.FC = () => {
  return (
    <section className="mt-32 flex flex-col items-center px-[5%] 3xl:mt-48">
      <div
        className={clsx(
          "hidden text-2xl font-black md:flex md:flex-row md:items-center lg:gap-1 3xl:gap-2 3xl:text-3xl",
          exo2.className
        )}
      >
        <Image
          src="/images/Pinata Pitch Logo 2.png"
          alt="Piñata Pitch"
          width="60"
          height="46"
          className="mr-2 h-8 w-fit object-contain 3xl:h-11"
        />
        Piñata Pitch
      </div>
      <h1
        className={clsx(
          "text-center text-6xl font-black leading-tight md:text-[5rem]",
          exo2.className
        )}
      >
        Judges & Mentors
      </h1>
      <ul className="my-12 flex w-fit flex-row flex-wrap justify-center gap-x-24 gap-y-8 text-center md:my-24">
        {mentors.map((mentor, index) => (
          <li key={index} className="max-w-96 p-6 text-center">
            {mentor.link ? (
              <Link href={mentor.link} target="_blank">
                <Image
                  className="rounded-[4rem]"
                  {...mentor.image}
                  alt={mentor.name}
                />
              </Link>
            ) : (
              <Image
                className="rounded-[4rem]"
                {...mentor.image}
                alt={mentor.name}
              />
            )}
            <h3
              className={clsx(
                "text-4xl font-black leading-snug",
                exo2.className
              )}
            >
              {mentor.name}
            </h3>
            <p className="text-2xl leading-snug">{mentor.biography}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MentorsJudges;
