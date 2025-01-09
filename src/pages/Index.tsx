import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Structure from "@/components/Structure";
import Pillars from "@/components/Pillars";
import Team from "@/components/Team";
import Mission from "@/components/Mission";
import QRCode from "@/components/QRCode";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Structure />
        <Pillars />
        <Services />
        <Mission />
        <Team />
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