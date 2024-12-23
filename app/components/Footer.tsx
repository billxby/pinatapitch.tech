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
    <section className="w-full bg-black px-40 text-white">
      {props.expanded ? (
        <div className="mt-12 flex flex-col border-b border-neutral-600 py-24">
          <h3
            className={clsx(
              "text-4xl font-black leading-loose",
              exo2.className
            )}
          >
            Shape the Future of Montreal Tech
          </h3>
          <div className="flex flex-row items-center">
            <p className="max-w-[50%] text-3xl font-medium leading-snug text-white">
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
                className="absolute -ml-24 -mt-14 inline"
              >
                <path
                  d="M6.43164 5C0.0986404 45.5 11.5316 126.5 107.932 126.5M107.932 126.5L82.9316 90M107.932 126.5L76.9316 151"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <Link href="/contact" target="_blank">
                <div className="w-fit rounded-full bg-white px-36 py-3 text-center text-2xl font-black text-black">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      <footer className="flex w-full flex-row items-center bg-black py-12 text-white">
        <Link href="/">
          <div
            className={clsx(
              "flex flex-row items-center gap-2 text-3xl font-black sm:gap-3",
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
        <p className="ml-auto w-fit max-w-[20%] text-right text-2xl font-semibold">
          Made by entrepreneurial minds for entrepreneurial minds.
        </p>
      </footer>{" "}
    </section>
  );
};

export default Footer;
