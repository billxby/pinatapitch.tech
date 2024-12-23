import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";

const Navbar: React.FC = () => {
  return (
    <nav className="3xl:px-40 3xl:py-12 fixed left-0 top-0 z-10 flex w-full flex-row items-center border-b border-neutral-300 bg-white lg:px-20 lg:py-6">
      <Link href="/">
        <div
          className={clsx(
            "3xl:text-3xl 3xl:gap-2 flex flex-row items-center font-black lg:gap-1 lg:text-2xl",
            exo2.className
          )}
        >
          <Image
            src="/images/Pinata Pitch Logo 2.png"
            alt="Piñata Pitch"
            width="60"
            height="46"
            className="3xl:h-11 object-contain lg:h-8"
          />
          Piñata Pitch
        </div>
      </Link>
      <Link
        href="https://tally.so/r/mYoybd"
        target="_blank"
        className="ml-auto"
      >
        <div className="3xl:px-24 3xl:py-3 3xl:text-xl w-fit rounded-full bg-black text-center font-black text-white lg:px-16 lg:py-2 lg:text-sm">
          Sign Up
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
