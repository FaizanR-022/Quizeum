import {
  BackgroundLayer,
  HeroBox,
  Overlay,
  Wrapper,
} from "../../Global/styled";
import { motion } from "framer-motion";
import Header from "./Header-Footer/Header";
import Footer from "./Header-Footer/Footer";
import { useEffect, useRef, useState } from "react";

const BackgroundLayers = ({ motionType, children, ...props }) => {
  const overlayRef = useRef(null);
  const [paddingBottom, setPaddingBottom] = useState("0");

  useEffect(() => {
    const handlePadding = () => {
      if (overlayRef.current) {
        const overlayHeight = overlayRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const isHeightExceeding = overlayHeight > (98 / 100) * viewportHeight;

        setPaddingBottom(isHeightExceeding ? "4vh" : "0");
      }
    };

    // Initial calculation
    handlePadding();

    // Recalculate on window resize
    window.addEventListener("resize", handlePadding);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handlePadding);
  }, []);

  return (
    <>
      <BackgroundLayer>
        <motion.div {...motionType}>
          <Wrapper>
            <Overlay
              ref={overlayRef}
              sx={{ paddingBottom, ...props.Overlaysx }}
            >
              <Header />
              <HeroBox sx={props.HeroBoxsx}>{children}</HeroBox>
              {/* <Footer /> */}
            </Overlay>
          </Wrapper>
        </motion.div>
      </BackgroundLayer>
      <Footer />
    </>
  );
};

export default BackgroundLayers;
