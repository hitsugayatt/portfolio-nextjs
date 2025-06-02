import About from "@/components/About";
import Hero from "@/components/Hero";
import ProofOfWork from "@/components/ProofOfWork";

export default function Home() {
  return (
    <div className="items-center flex justify-center">
      <div className="pt-24 min-h-screen max-w-3xl">
        <div>
          <Hero />
          <About />
          <ProofOfWork />
        </div>
        
      </div>
    </div>
  );
}
