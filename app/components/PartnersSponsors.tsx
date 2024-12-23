import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { exo2 } from "../utils/font";

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
    <section className="px-40 py-12">
      <h1
        className={clsx(
          "text-center text-[5rem] font-black leading-tight",
          exo2.className
        )}
      >
        Our Partners & Sponsors
      </h1>
      <ul className="my-24 flex w-fit flex-row flex-wrap justify-center gap-x-24 gap-y-8">
        {sponsors.map((sponsor, index) => (
          <li
            key={index}
            className="rounded-[2.5rem] border-4 border-black p-6"
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
