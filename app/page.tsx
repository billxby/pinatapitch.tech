import CompetitionSchedule from "./components/CompetitionSchedule";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PartnersSponsors from "./components/PartnersSponsors";
import Prize from "./components/Prize";
import Pros from "./components/Pros";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Pros />
      <CompetitionSchedule />
      <Prize />
      <PartnersSponsors />
      <Footer expanded />
    </div>
  );
}
