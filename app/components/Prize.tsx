import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { exo2 } from "../utils/font";

const Prize: React.FC = () => {
  return (
    <section className="mb-12 mt-64 flex flex-col items-center md:mb-6 md:mt-36 3xl:mb-12">
      <div className="m-6 w-fit select-none rounded-xl border-2 border-neutral-500 px-12 pb-14 pt-16 text-center shadow-[#7ABFFF] [box-shadow:_12px_12px_var(--tw-shadow-color)] md:m-36 md:px-36 md:pb-32 md:pt-36 3xl:m-48 3xl:rounded-2xl 3xl:border-4 3xl:px-72 3xl:pb-44 3xl:pt-64 3xl:[box-shadow:_24px_24px_var(--tw-shadow-color)]">
        <Image
          src="/images/confetti.svg"
          width="312"
          height="284"
          alt="Confetti"
          className="absolute -mt-[20.5rem] ml-[12rem] h-24 w-fit object-contain md:-mt-[14.5rem] md:ml-[36rem] md:h-36 3xl:-mt-[27rem] 3xl:ml-[52rem] 3xl:h-80"
          draggable="false"
        />
        <Image
          src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 1.png"
          width="718"
          height="684"
          alt="Pinata"
          className="absolute left-1/2 right-1/2 z-0 -ml-[1.5rem] -mt-[19.4rem] w-[16rem] -translate-x-1/2 -scale-x-100 transform object-contain md:-mt-[26rem] md:w-[26rem] 3xl:-mt-[36rem] 3xl:w-[45rem] 3xl:max-w-[36rem]"
          draggable="false"
        />
        <h1
          className={clsx(
            "text-7xl font-bold leading-snug shadow-[#7ABFFF] text-shadow md:text-9xl md:leading-none 3xl:text-[11rem]",
            exo2.className
          )}
        >
          $10,000
        </h1>
        <h2 className="text-3xl font-bold leading-relaxed md:text-[2.75rem] 3xl:text-6xl">
          Grand Prize
        </h2>
        <p className="text-xl leading-tight md:text-[1.7rem] 3xl:text-4xl">
          An unrestricted grant to continue <br className="hidden md:block" />
          working on your ideas.
        </p>
        <Image
          src="/images/confetti.svg"
          width="312"
          height="284"
          alt="Confetti"
          className="absolute -ml-[1rem] -mt-[20.5rem] h-24 w-fit rotate-180 transform object-contain md:-ml-[15.5rem] md:mt-[5rem] md:h-36 3xl:-ml-[31rem] 3xl:mt-[4rem] 3xl:h-80"
          draggable="false"
          // onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default Prize;
