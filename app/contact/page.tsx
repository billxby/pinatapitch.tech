import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { exo2 } from "../utils/font";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mt-16 min-h-screen px-8 py-12 md:px-44 md:py-48 3xl:px-52 3xl:py-56">
        <div className="flex h-full flex-col md:flex-row md:justify-between">
          <div>
            <h1
              className={clsx(
                "text-center text-4xl font-black leading-tight md:text-6xl 3xl:text-[5rem]",
                exo2.className
              )}
            >
              Contact Us
            </h1>
            <p className="py-8 text-xl leading-snug 3xl:text-3xl">
              Our email is open!
              <br />
              Or find us on Instagram{" "}
              <Link href="https://instagram.com/@pinatapitch" target="_blank">
                @pinatapitch
              </Link>
              <br />
              <br />
              <Link href="mailto:team@pinatapitch.tech">
                team@pinatapitch.tech
              </Link>
            </p>
          </div>
          <Image
            src="/images/Screenshot 2024-12-16 at 3.15.41 PM 1 1.png"
            width="606"
            height="577"
            alt="🪅"
            className="mt-16 object-contain md:mt-0 md:w-[28rem] 3xl:w-[38rem]"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
