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
    <section className="3xl:mt-40 flex min-h-screen flex-col items-center justify-center mt-24 text-center">
      <Image
        src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 1.png"
        width="606"
        height="577"
        alt="🪅"
        className="mb-12 lg:hidden"
      />
      <div
        className={clsx(
          "3xl:text-2xl mb-2 text-4xl font-black",
          exo2.className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Location"
          src="data:image/png;base64,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"
          className="3xl:h-12 3xl:w-12 mx-2 -mt-1 inline h-8 w-8"
        />
        April 26
      </div>
      <h1
        className={clsx(
          "3xl:text-[11rem] text-center text-9xl font-black leading-relaxed",
          exo2.className
        )}
      >
        Piñata Pitch
      </h1>
      <h2 className="3xl:text-6xl text-center text-[2.75rem] font-semibold leading-snug text-neutral-500">
        Igniting passion for entrepreneurship
        <br />
        in Montreal
      </h2>
      <Link href="https://tally.so/r/mYoybd" target="_blank">
        <div className="3xl:px-96 3xl:py-5 3xl:text-3xl mt-12 w-fit rounded-full bg-[#D102A8] px-64 py-3 text-center text-xl font-black text-white">
          Sign Up
        </div>
      </Link>
      <div className="3xl:-mb-6 3xl:-mr-[72rem] absolute -mb-[8.5rem] -mr-[46rem]">
        <svg
          width="211"
          height="188"
          viewBox="0 0 211 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="3xl:w-52 w-28 object-contain"
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
      <div className="3xl:my-20 my-14">
        <p className="3xl:text-3xl 3xl:pb-10 pb-6 text-xl font-bold">
          backed by
        </p>
        <ul className="3xl:gap-12 mx-auto grid grid-flow-row grid-cols-1 gap-0 lg:grid-cols-3">
          {frontPageSponsors.map((sponsor, index) => (
            <li key={index}>
              {sponsor.link ? (
                <Link href={sponsor.link} target="_blank">
                  <Image
                    {...sponsor.image}
                    alt={sponsor.name}
                    className="3xl:h-20 object-contain lg:h-12"
                  />
                </Link>
              ) : (
                <Image
                  {...sponsor.image}
                  alt={sponsor.name}
                  className="3xl:h-20 object-contain lg:h-12"
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
        className="3xl:w-[23rem] absolute left-0 -z-10 -mt-48 hidden w-[16rem] object-contain lg:block"
      />
      <Image
        src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 2.png"
        alt=""
        width="369"
        height="684"
        className="3xl:w-[23rem] absolute right-0 -z-10 -mt-48 hidden w-[16rem] -scale-x-100 transform object-contain lg:block"
      />
    </section>
  );
};

export default Hero;
