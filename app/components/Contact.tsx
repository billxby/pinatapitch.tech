import clsx from "clsx";
import React from "react";
import { exo2 } from "../utils/font";

const Contact: React.FC = () => {
  return (
    <section className="px-8 py-20 md:px-44 md:py-32 3xl:px-52 3xl:py-40">
      <h1
        className={clsx(
          "text-4xl font-black leading-tight md:text-6xl 3xl:text-[5rem]",
          exo2.className
        )}
      >
        Contact Us
      </h1>
      <p className="w-2/3 text-xl leading-snug 3xl:text-3xl py-8">
        Our email is open! <br/>
        team@pinatapitch.tech <br/><br/>

        You can also find us on Instagram @pinatapitch
      </p>
    </section>
  );
};

export default Contact;
