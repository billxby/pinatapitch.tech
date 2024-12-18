"use client";

import { Exo_2 } from "next/font/google";
import React from "react";
import { useWidth } from "../utils";
import Spline from "@splinetool/react-spline";
import clsx from "clsx";

const REGULAR_PINATA =
  "https://prod.spline.design/BuuW6VXwkbJe-2il/scene.splinecode";
const MOBILE_PINATA =
  "https://prod.spline.design/Zoq89yTGh3g1z01K/scene.splinecode";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

interface AnimatedLogoProps {
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className }) => {
  const width = useWidth();

  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div className="grid grid-cols-1 grid-rows-1 h-96">
        <div
          className={clsx(
            "flex flex-col items-start font-black text-[5.5rem] leading-none sm:text-9xl z-0 col-start-1 row-start-1 my-auto",
            exo2.className,
          )}
        >
          <h1
            style={{
              letterSpacing: width >= 1024 ? 43 : width >= 640 ? 1 : 11,
            }}
          >
            Pinata
          </h1>
          <h1
            style={{
              letterSpacing: width >= 1024 ? 75 : width >= 640 ? 22 : 28,
            }}
            className="mt-6"
          >
            Pitch
          </h1>
        </div>
        <Spline
          className="z-10 col-start-1 row-start-1"
          scene={width >= 640 ? REGULAR_PINATA : MOBILE_PINATA}
        />
      </div>
    </div>
  );
};
