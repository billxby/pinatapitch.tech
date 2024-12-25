import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";

import type { Sponsor } from "@/app/utils/types";

const sponsors: Sponsor[] = [
  // ...new Array(13).fill({
  //   name: "Videotron",
  //   image: {
  //     src: "/images/sponsors/videotron.png",
  //     height: 85,
  //     width: 430,
  //   },
  // }),
] satisfies object[];

const PartnersSponsors: React.FC = () => {
  if (sponsors.length === 0) {
    return;
  }

  return (
    <section className="p-8 md:px-40 md:py-12">
      <h1
        className={clsx(
          "text-center text-4xl font-black leading-tight md:text-6xl 3xl:text-[5rem]",
          exo2.className
        )}
      >
        Our Partners & Sponsors
      </h1>
      <ul className="my-12 flex w-fit flex-row flex-wrap justify-center gap-x-6 gap-y-4 3xl:my-20 3xl:gap-x-24 3xl:gap-y-8">
        {sponsors.map((sponsor, index) => (
          <li
            key={index}
            className="rounded-3xl border-2 border-black p-3 3xl:rounded-[2.5rem] 3xl:border-4 3xl:p-6"
          >
            {sponsor.link ? (
              <Link href={sponsor.link} target="_blank">
                <Image
                  {...sponsor.image}
                  alt={sponsor.name}
                  className="h-12 w-full object-contain 3xl:h-20"
                />
              </Link>
            ) : (
              <Image
                {...sponsor.image}
                alt={sponsor.name}
                className="h-12 w-full object-contain 3xl:h-20"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnersSponsors;
