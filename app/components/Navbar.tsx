import React from "react";
import Image from "next/image";
import Link from "next/link";
import { exo2 } from "../utils/font";
import clsx from "clsx";

const Navbar: React.FC = () => {
  return (
    <nav className="px-40 py-12 fixed left-0 top-0 flex flex-row items-center w-full bg-white border-b border-neutral-300 z-10">
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
      <Link
        href="https://tally.so/r/mYoybd"
        target="_blank"
        className="ml-auto"
      >
        <div className="w-fit text-xl py-3 px-24 rounded-full text-white text-center font-black bg-black">
          Sign Up
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
