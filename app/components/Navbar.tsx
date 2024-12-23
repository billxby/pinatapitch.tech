import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 top-0 z-10 flex w-full flex-row items-center border-b border-neutral-300 bg-white px-40 py-12">
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
      <Link
        href="https://tally.so/r/mYoybd"
        target="_blank"
        className="ml-auto"
      >
        <div className="w-fit rounded-full bg-black px-24 py-3 text-center text-xl font-black text-white">
          Sign Up
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
