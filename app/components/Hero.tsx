import clsx from "clsx";
import React from "react";
import { exo2 } from "../utils/font";
import Image from "next/image";
import Link from "next/link";

const frontPageSponsors = [
  ...new Array(3).fill({
    name: "Videotron",
    link: "", // if in the partnership contract we have to link to them, we'll fill this field
    image: {
      src: "/images/sponsors/videotron.png",
      height: 85,
      width: 430,
    },
  }),
] satisfies object[];

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-screen pt-40">
      <Image
        src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 1.png"
        width="606"
        height="577"
        alt="🪅"
        className="mb-12 twoxl:hidden"
      />
      <div
        className={clsx(
          "text-2xl sm:text-5xl sm:text-pink sm:font-black mb-2",
          exo2.className
        )}
      >
        <Image
          alt="Location"
          src="data:image/png;base64,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"
          width="50"
          height="50"
          className="inline -mt-1 mx-2"
        />
        April 26
      </div>
      <h1
        className={clsx(
          "font-black leading-tight text-[11rem] text-center",
          exo2.className
        )}
      >
        Piñata Pitch
      </h1>
      <h2 className="text-6xl leading-snug font-semibold text-center text-neutral-500">
        Igniting passion for entrepreneurship
        <br />
        in Montreal
      </h2>
      <Link href="https://tally.so/r/mYoybd" target="_blank">
        <div className="w-fit text-3xl py-5 px-96 mt-12 rounded-full text-white text-center font-black bg-[#D102A8]">
          Sign Up
        </div>
      </Link>
      <div className="absolute -mb-6 -mr-[72rem]">
        <svg
          width="211"
          height="188"
          viewBox="0 0 211 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M205.987 -44C182.959 16.468 120.372 124.94 47.047 89.13C-3.016 64.682 35.249 10.811 88.984 39.682C142.719 68.553 126.941 171.782 8 161.802M8 161.802L23.967 143.704M8 161.802L32.672 182.436"
            stroke="#1F1F1F"
            strokeOpacity="0.8"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="my-20">
        <p className="text-3xl font-bold pb-10">backed by</p>
        <ul className="grid grid-cols-2 twoxl:grid-cols-3 grid-flow-row gap-12">
          {frontPageSponsors.map((sponsor, index) => (
            <li key={index}>
              {sponsor.link ? (
                <Link href={sponsor.link} target="_blank">
                  <Image {...sponsor.image} alt={sponsor.name} />
                </Link>
              ) : (
                <Image {...sponsor.image} alt={sponsor.name} />
              )}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 2.png"
        alt=""
        width="369"
        height="684"
        className="absolute left-0 -mt-56 -z-10 hidden twoxl:block"
      />
      <Image
        src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 2.png"
        alt=""
        width="369"
        height="684"
        className="absolute right-0 -mt-56 transform -scale-x-100 -z-10 hidden twoxl:block"
      />
    </section>
  );
};

export default Hero;