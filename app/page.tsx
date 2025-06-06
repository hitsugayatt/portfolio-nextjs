import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProofOfWork from "@/components/ProofOfWork";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="items-center flex justify-center">
      <div className="pt-24 min-h-screen max-w-3xl">
        <div>
          <Hero />
          <About />
          <ProofOfWork />
          <Skills />
          <ContactMe />
          <Footer />
        </div>
        
      </div>
    </div>
  );
}
