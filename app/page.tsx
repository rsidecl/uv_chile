import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Clients from "./components/Clients";
import { StickyScrollRevealDemo } from "./components/Services";
import { TypewriterEffectSmoothDemo } from "./components/Contact";

export default function Home() {
  return (
    <main
      className="relative bg-black flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Clients />
        <StickyScrollRevealDemo />
        <TypewriterEffectSmoothDemo />
      </div>
    </main>
  );
}
