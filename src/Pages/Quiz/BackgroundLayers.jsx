import {
  BackgroundLayer,
  HeroBox,
  Overlay,
  Wrapper,
} from "../../Global/styled";
import { motion } from "framer-motion";

const BackgroundLayers = ({ motionType, children, ...props }) => {
  return (
    <BackgroundLayer>
      <motion.div {...motionType}>
        <Wrapper>
          <Overlay sx={props.Overlaysx}>
            <HeroBox sx={props.HeroBoxsx}>
              {/* <h2>Hllo</h2> */}
              {children}
            </HeroBox>
          </Overlay>
        </Wrapper>
      </motion.div>
    </BackgroundLayer>
  );
};

export default BackgroundLayers;
