import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";

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
    <section className="mt-24 flex min-h-screen flex-col items-center justify-center px-10 pt-4 text-center 3xl:mt-40">
      <Image
        src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 1.png"
        width="606"
        height="577"
        alt="🪅"
        className="mb-8 w-[20rem] md:mb-12 md:hidden md:w-[38rem]"
      />
      <div
        className={clsx(
          "text-xl font-black md:mb-2 md:text-4xl 3xl:text-2xl",
          exo2.className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Location"
          src="data:image/png;base64,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"
          className="-mt-1 mr-1 inline h-6 w-6 md:mr-2 md:h-8 md:w-8 3xl:h-12 3xl:w-12"
        />
        April 26
      </div>
      <h1
        className={clsx(
          "mb-2 text-center text-[3.45rem] font-black leading-none md:mb-0 md:text-9xl md:leading-relaxed 3xl:text-[11rem]",
          exo2.className
        )}
      >
        Piñata Pitch
      </h1>
      <h2 className="text-center text-2xl font-semibold leading-snug text-neutral-500 md:text-[2.75rem] 3xl:text-6xl">
        Igniting passion for entrepreneurship <br className="hidden md:block" />
        in Montreal
      </h2>
      <Link href="https://tally.so/r/mYoybd" target="_blank">
        <div className="mt-8 w-fit rounded-full bg-[#D102A8] px-24 py-3 text-center text-xl font-black text-white md:mt-12 md:px-64 3xl:px-96 3xl:py-5 3xl:text-3xl">
          Sign Up
        </div>
      </Link>
      <div className="absolute -mb-[8.5rem] -mr-[46rem] hidden md:block 3xl:-mb-6 3xl:-mr-[72rem]">
        <svg
          width="211"
          height="188"
          viewBox="0 0 211 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 object-contain 3xl:w-52"
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
      <div className="mb-7 mt-14 md:my-14 3xl:my-20">
        <p className="pb-6 text-xl font-bold 3xl:pb-10 3xl:text-3xl">
          backed by
        </p>
        <ul className="mx-auto grid grid-flow-col grid-rows-3 gap-4 md:grid-flow-row md:grid-cols-1 md:gap-0 lg:grid-cols-3 3xl:gap-12">
          {frontPageSponsors.map((sponsor, index) => (
            <li key={index} className="px-4 md:px-0">
              {sponsor.link ? (
                <Link href={sponsor.link} target="_blank">
                  <Image
                    {...sponsor.image}
                    alt={sponsor.name}
                    className="object-contain lg:h-12 3xl:h-20"
                  />
                </Link>
              ) : (
                <Image
                  {...sponsor.image}
                  alt={sponsor.name}
                  className="object-contain lg:h-12 3xl:h-20"
                />
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
        className="absolute left-0 -z-10 -mt-48 hidden w-[16rem] object-contain lg:block 3xl:w-[23rem]"
      />
      <Image
        src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 2.png"
        alt=""
        width="369"
        height="684"
        className="absolute right-0 -z-10 -mt-48 hidden w-[16rem] -scale-x-100 transform object-contain lg:block 3xl:w-[23rem]"
      />
    </section>
  );
};

export default Hero;
