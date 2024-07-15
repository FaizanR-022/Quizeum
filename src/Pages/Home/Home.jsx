import Features from "./Features/Features";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection/HeroSection";
import Programs from "./Programs/Programs";
import Testimonials from "./Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Programs />
      <Testimonials />
      <Footer />
    </>
  );
}
