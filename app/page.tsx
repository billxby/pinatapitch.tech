import CompetitionSchedule from "./components/CompetitionSchedule";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import PartnersSponsors from "./components/PartnersSponsors";
import Prize from "./components/Prize";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-full">
      <Navbar />
      <Hero />
      <Features />
      <CompetitionSchedule />
      <Prize />
      {/* <PartnersSponsors /> */}
      <Footer expanded />
    </div>
  );
}
