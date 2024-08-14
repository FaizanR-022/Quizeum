import {
  BackgroundLayer,
  HeroBox,
  Overlay,
  Wrapper,
} from "../../Global/styled";
import { motion } from "framer-motion";

const BackgroundLayers = ({ motionType, children }) => {
  return (
    <BackgroundLayer>
      {/* <motion.div {...motionType}> */}
      <Wrapper>
        <Overlay>
          <HeroBox>
            {/* <h2>Hllo</h2> */}
            {children}
          </HeroBox>
        </Overlay>
      </Wrapper>
      {/* </motion.div> */}
    </BackgroundLayer>
  );
};

export default BackgroundLayers;
