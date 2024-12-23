import Pros from "./components/Pros";
import Hero from "./components/Hero";
import CompetitionSchedule from "./components/CompetitionSchedule";
import Prize from "./components/Prize";
import Navbar from "./components/Navbar";
import PartnersSponsors from "./components/PartnersSponsors";
import Footer from "./components/Footer";

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
