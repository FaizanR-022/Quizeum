import Features from "./Features/Features";
import Footer from "./Header-Footer/Footer";
import Header from "./Header-Footer/Header";
import HeroSection from "./HeroSection/HeroSection";
import Programs from "./Programs/Programs";
import Testimonials from "./Testimonials/Testimonials";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { BackgroundLayer } from "../../Global/styled";
import { motionFade } from "../../Global/motionStyling";
import CopyRightBar from "../Quiz/QuizWindow/Header-Footer/Footer";

export default function Home() {
  return (
    <BackgroundLayer>
      <motion.div
        {...motionFade}
        // animate={{ x: 100 }}
        // transition={{ type: "spring", stiffness: 100 }}
      >
        <Header />
        <HeroSection />
        <Features />
        <Programs />
        <Testimonials />
        <Footer />
        <CopyRightBar />
      </motion.div>
    </BackgroundLayer>
  );
}
