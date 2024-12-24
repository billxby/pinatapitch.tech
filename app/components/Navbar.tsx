import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 top-0 z-10 flex w-full flex-row items-center border-b border-neutral-300 bg-white px-10 py-6 md:px-20 3xl:px-40 3xl:py-12">
      <Link href="/">
        <div
          className={clsx(
            "flex flex-row items-center text-2xl font-black lg:gap-1 3xl:gap-2 3xl:text-3xl",
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
      <Link
        href="https://tally.so/r/mYoybd"
        target="_blank"
        className="ml-auto"
      >
        <div className="w-fit rounded-full bg-black px-8 py-2 text-center text-sm font-black text-white md:px-16 3xl:px-24 3xl:py-3 3xl:text-xl">
          Sign Up
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
