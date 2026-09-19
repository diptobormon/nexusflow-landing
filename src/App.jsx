import Footer from "./components/Footer";
import Header from "./components/Header";

import Cta from "./sections/Cta";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import LogoCloud from "./sections/LogoCloud";
import Pricing from "./sections/Pricing";
import Solutions from "./sections/Solutions";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <div className="bg-black text-[#ededed] min-h-screen font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Solutions />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
