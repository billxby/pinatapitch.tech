import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { exo2 } from "../utils/font";

const Prize: React.FC = () => {
  return (
    <section className="3xl:mb-12 mb-6 mt-36 flex flex-col items-center">
      <div className="3xl:m-48 3xl:rounded-2xl 3xl:border-4 3xl:px-72 3xl:pb-44 3xl:pt-64 3xl:[box-shadow:_24px_24px_var(--tw-shadow-color)] m-36 w-fit select-none rounded-xl border-2 border-neutral-500 px-36 pb-32 pt-36 text-center shadow-[#7ABFFF] [box-shadow:_12px_12px_var(--tw-shadow-color)]">
        <Image
          src="/images/confetti.svg"
          width="312"
          height="284"
          alt="Confetti"
          className="3xl:h-80 3xl:-mt-[26rem] 3xl:ml-[52rem] absolute -mt-[14.5rem] ml-[32rem] h-36 object-contain"
          draggable="false"
        />
        <Image
          src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 1.png"
          width="718"
          height="684"
          alt="Pinata"
          className="3xl:max-w-[36rem] 3xl:w-[45rem] 3xl:-mt-[36rem] absolute left-1/2 right-1/2 z-0 -ml-[1.5rem] -mt-[26rem] w-[26rem] -translate-x-1/2 -scale-x-100 transform object-contain"
          draggable="false"
        />
        <h1
          className={clsx(
            "3xl:text-[11rem] text-9xl font-bold leading-none shadow-[#7ABFFF] text-shadow",
            exo2.className
          )}
        >
          $10,000
        </h1>
        <h2 className="3xl:text-6xl text-[2.75rem] font-bold leading-relaxed">
          Grand Prize
        </h2>
        <p className="3xl:text-4xl text-[1.7rem] leading-tight">
          An unrestricted grant to continue
          <br />
          working on your ideas.
        </p>
        <Image
          src="/images/confetti.svg"
          width="312"
          height="284"
          alt="Confetti"
          className="3xl:h-80 3xl:-ml-[30rem] absolute -ml-[20.5rem] mt-[5rem] h-36 rotate-180 transform object-contain"
          draggable="false"
          // onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default Prize;
