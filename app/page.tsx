import Image from 'next/image';
import Link from 'next/link';
import { AnimatedLogo } from './components/animatedlogo';
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="px-10 min-h-screen">
      <nav className="px-10 py-5 absolute left-0 top-0 flex flex-row w-full">
        <Link href="/">
          <Image src="/images/Logo Square Black.png" alt="Pinata Pitch" width="80" height="48" />
        </Link>
        <div className={`flex flex-row gap-1 sm:gap-2 items-center justify-center ml-auto ${exo2.className} text-xl sm:text-3xl font-black`}>
          <Image alt="Location" src="data:image/png;base64,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" width="30" height="30" />
          April 26
        </div>
      </nav>
      <section className="flex flex-col justify-center items-center h-screen mx-auto max-w-[20rem] sm:max-w-[26rem] lg:max-w-[39rem]">
        <div>
          <AnimatedLogo />
          <h2 className="text-2xl sm:text-[2rem] sm:leading-tight lg:text-5xl lg:leading-snug font-bold text-center">
            Montreal&apos;s <u>Premier</u> Tech Pitch Competition
          </h2>
          <Link href="https://tally.so/r/mYoybd" target="_blank">
            <div className="text-md sm:text-lg lg:text-2xl py-2 my-8 rounded-full text-white text-center font-black bg-[#D102A8]">
              Sign Up
            </div>
          </Link>
        </div>
      </section>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
