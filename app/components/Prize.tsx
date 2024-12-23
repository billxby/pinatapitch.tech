import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { exo2 } from "../utils/font";

const Prize: React.FC = () => {
  return (
    <section className="mb-12 mt-36 flex flex-col items-center">
      <div className="px-72 pb-44 pt-64 m-48 w-fit rounded-2xl text-center select-none border-4 border-neutral-500 [box-shadow:_24px_24px_var(--tw-shadow-color)] shadow-[#7ABFFF]">
        <Image
          src="/images/confetti.svg"
          width="312"
          height="284"
          alt="Confetti"
          className="absolute ml-[52rem] -mt-[26rem]"
          draggable="false"
        />
        <Image
          src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 1.png"
          width="718"
          height="684"
          alt="Pinata"
          className="absolute -ml-[24px] -mt-[36rem] left-1/2 right-1/2 transform -translate-x-1/2 -scale-x-100 max-w-[36rem] z-0"
          draggable="false"
        />
        <h1
          className={clsx(
            "text-[11rem] leading-none font-bold text-shadow shadow-[#7ABFFF]",
            exo2.className
          )}
        >
          $10,000
        </h1>
        <h2 className="text-6xl font-bold leading-relaxed">Grand Prize</h2>
        <p className="text-4xl">
          An unrestricted grant to continue
          <br />
          working on your ideas.
        </p>
        <Image
          src="/images/confetti.svg"
          width="312"
          height="284"
          alt="Confetti"
          className="absolute -ml-[30rem] mt-16 transform rotate-180"
          draggable="false"
          // onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default Prize;
