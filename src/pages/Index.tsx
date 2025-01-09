import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Structure from "@/components/Structure";
import Mission from "@/components/Mission";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QRCode from "@/components/QRCode";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Structure />
        <Mission />
        <Pillars />
        <Services />
        <Team />
        <Reviews />
        <Contact />
        <div className="py-12">
          <QRCode />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;