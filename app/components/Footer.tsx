import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";

interface FooterProps {
  expanded: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <section className="w-full bg-black px-10 text-white md:px-20 3xl:px-40">
      {props.expanded ? (
        <div className="mt-2 flex flex-col border-b border-neutral-600 py-8 text-center md:mt-6 md:py-16 md:text-left 3xl:mt-12 3xl:py-24">
          <h3
            className={clsx(
              "mb-4 text-[1.7rem] font-black leading-tight md:mb-0 md:leading-loose 3xl:text-4xl",
              exo2.className
            )}
          >
            Shape the Future of Montreal Tech
          </h3>
          <div className="flex flex-col items-center md:flex-row">
            <p className="text-xl font-medium leading-snug text-white md:max-w-[50%] 3xl:text-3xl">
              Whether through funding, mentorship, judging, or prizes, your
              involvement creates lasting impact. Partner with Piñata Pitch
              connects you with Montreal&apos;s most promising young talent. 🤍
            </p>
            <div className="md:ml-auto">
              <svg
                width="75"
                height="102"
                viewBox="0 0 115 156"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -ml-20 -mt-7 hidden h-16 md:inline 3xl:-ml-24 3xl:-mt-14 3xl:h-24"
              >
                <path
                  d="M6.43164 5C0.0986404 45.5 11.5316 126.5 107.932 126.5M107.932 126.5L82.9316 90M107.932 126.5L76.9316 151"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <Link href="/contact" target="_blank">
                <div className="mt-4 w-fit rounded-full bg-white px-24 py-2 text-center text-lg font-black text-black md:mt-0 3xl:px-36 3xl:py-3 3xl:text-2xl">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      <footer className="flex w-full flex-row items-center bg-black py-6 text-white 3xl:py-12">
        <Link href="/">
          <div
            className={clsx(
              "flex flex-row items-center gap-1 text-[0px] font-black md:text-2xl 3xl:gap-2 3xl:text-3xl",
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
        </Link>
        <p className="ml-auto w-fit text-lg font-semibold md:max-w-[20%] md:text-right 3xl:text-2xl">
          Made by entrepreneurial minds for entrepreneurial minds.
        </p>
      </footer>{" "}
    </section>
  );
};

export default Footer;
