import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LogoMarquee } from "./components/LogoMarquee";
import { Profile } from "./components/Profile";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PromoPopup } from "./components/PromoPopup";

export default function App() {
  return (
    <div className="grain min-h-screen bg-navy-950 font-body text-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-3 focus:font-display focus:text-xs focus:font-bold focus:tracking-widest focus:text-navy-950 focus:uppercase"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <LogoMarquee />
        <Profile />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <PromoPopup />
    </div>
  );
}
