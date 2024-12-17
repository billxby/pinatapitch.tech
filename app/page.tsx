import Spline from '@splinetool/react-spline/next';
import { Exo_2 } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="items-center px-10 justify-items-center min-h-screen">
      <nav className="py-5 flex flex-row justify-between">
        <Link href="/">
          <Image src="/images/Logo Square Black.png" alt="Pinata Pitch" width="80" height="48" />
        </Link>
        <div className="flex flex-row gap-2 items-center justify-center">
          <Image alt="Location" src="data:image/png;base64,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" className="w-5 h-5" width="20" height="20" />
          April 26
        </div>
      </nav>
      <header className="mx-auto max-w-[26rem]">
        <div className="grid grid-cols-1 grid-rows-1 h-96 grid-flow-row">
        <h1 className={`font-black ${exo2.className} text-9xl z-0 col-start-1 row-start-1 my-auto`}>
          <h1 style={{ letterSpacing: "normal" }}>Pinata</h1>
          <h1 style={{ letterSpacing: 22 }} className="mt-6">Pitch</h1>
        </h1>
        <Spline
          className="z-10 col-start-1 row-start-1"
          scene="https://prod.spline.design/BuuW6VXwkbJe-2il/scene.splinecode"
        />
        </div>
        <h2>
          Montreal&apos;s <u>First</u> Tech Pitch Competition
        </h2>
      </header>
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
