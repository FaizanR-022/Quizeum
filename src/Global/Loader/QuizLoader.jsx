import BackgroundLayers from "../../Pages/Quiz/BackgroundLayers";
import { motionSlide } from "../motionStyling";
import { BackgroundLayer, HeroBox, Overlay, Wrapper } from "../styled";
import Loader from "./Loader";
import { motion } from "framer-motion";

export default function QuizLoader() {
  return (
    <BackgroundLayers motionType={motionSlide}>
      <Loader />
    </BackgroundLayers>
    // <>
    //   <BackgroundLayer>
    //     <motion.div>
    //       <Wrapper>
    //         <Overlay>
    //           <HeroBox>
    //             <Loader />
    //           </HeroBox>
    //         </Overlay>
    //       </Wrapper>
    //     </motion.div>
    //   </BackgroundLayer>
    // </>
  );
}
