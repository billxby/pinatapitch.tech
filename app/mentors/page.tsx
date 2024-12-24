import Footer from "../components/Footer";
import Mentors from "../components/Mentors";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Mentors />
      <Footer expanded />
    </div>
  );
}
