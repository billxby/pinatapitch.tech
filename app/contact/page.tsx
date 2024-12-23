import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Footer expanded />
    </div>
  );
}
