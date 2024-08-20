import {
  BackgroundLayer,
  HeroBox,
  Overlay,
  Wrapper,
} from "../../Global/styled";
import { motion } from "framer-motion";
import Header from "./QuizWindow/Header-Footer/Header";
import Footer from "./QuizWindow/Header-Footer/Footer";

const BackgroundLayers = ({ motionType, children, ...props }) => {
  return (
    <>
      <BackgroundLayer>
        <motion.div {...motionType}>
          <Wrapper>
            <Overlay sx={props.Overlaysx}>
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
