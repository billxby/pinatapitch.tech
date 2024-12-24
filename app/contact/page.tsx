import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Contact/>
      <Footer expanded />
    </div>
  );
}
