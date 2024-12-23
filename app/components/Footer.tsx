import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { exo2 } from "../utils/font";

interface FooterProps {
  expanded: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <section className="px-40 w-full bg-black text-white">
      {props.expanded ? (
        <div className="flex flex-col py-24 mt-12 border-b border-neutral-600">
          <h3
            className={clsx(
              "text-4xl leading-loose font-black",
              exo2.className
            )}
          >
            Shape the Future of Montreal Tech
          </h3>
          <div className="flex flex-row items-center">
            <p className="text-white font-medium text-3xl leading-snug max-w-[50%]">
              Whether through funding, mentorship, judging, or prizes, your
              involvement creates lasting impact. Partner with Piñata Pitch
              connects you with Montreal&apos;s most promising young talent. 🤍
            </p>
            <div className="ml-auto">
              <svg
                width="75"
                height="102"
                viewBox="0 0 115 156"
                xmlns="http://www.w3.org/2000/svg"
                className="inline absolute -ml-24 -mt-14"
              >
                <path
                  d="M6.43164 5C0.0986404 45.5 11.5316 126.5 107.932 126.5M107.932 126.5L82.9316 90M107.932 126.5L76.9316 151"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <Link href="https://tally.so/r/mYoybd" target="_blank">
                <div className="w-fit text-2xl py-3 px-36 rounded-full text-black text-center font-black bg-white">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      <footer className="flex flex-row items-center w-full py-12 bg-black text-white">
        <Link href="/">
          <div
            className={clsx(
              "flex flex-row gap-2 sm:gap-3 items-center text-3xl font-black",
              exo2.className
            )}
          >
            <Image
              src="/images/Pinata Pitch Logo 2.png"
              alt="Piñata Pitch"
              width="60"
              height="46"
            />
            Piñata Pitch
          </div>
        </Link>
        <p className="w-fit max-w-[20%] text-2xl text-right font-semibold ml-auto">
          Made by entrepreneurial minds for entrepreneurial minds.
        </p>
      </footer>{" "}
    </section>
  );
};

export default Footer;
