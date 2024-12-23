import React from "react";
import Image from "next/image";
import Link from "next/link";
import { exo2 } from "../utils/font";
import clsx from "clsx";

import type { Sponsor } from "@/app/utils/types";

const sponsors: Sponsor[] = [
  ...new Array(13).fill({
    name: "Videotron",
    image: {
      src: "/images/sponsors/videotron.png",
      height: 85,
      width: 430,
    },
  }),
] satisfies object[];

const PartnersSponsors: React.FC = () => {
  return (
    <section className="py-12 px-40">
      <h1
        className={clsx(
          "text-[5rem] leading-tight text-center font-black",
          exo2.className,
        )}
      >
        Our Partners & Sponsors
      </h1>
      <ul className="flex flex-row flex-wrap justify-center gap-y-8 gap-x-24 w-fit my-24">
        {sponsors.map((sponsor, index) => (
          <li
            key={index}
            className="border-4 border-black p-6 rounded-[2.5rem]"
          >
            {sponsor.link ? (
              <Link href={sponsor.link} target="_blank">
                <Image {...sponsor.image} alt={sponsor.name} />
              </Link>
            ) : (
              <Image {...sponsor.image} alt={sponsor.name} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnersSponsors;
