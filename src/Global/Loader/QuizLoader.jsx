import { useNavigate } from "react-router-dom";
import BackgroundLayers from "../../Pages/Quiz/BackgroundLayers";
import { motionSlide } from "../motionStyling";
import {
  BackgroundLayer,
  HeroBox,
  ModuleHeading,
  NextBtn,
  Overlay,
  Wrapper,
} from "../styled";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const overlaysx = {
  height: "97vh",
  pb: "0",
};

export default function QuizLoader() {
  const navigate = useNavigate();
  const timeLimit = 20;
  const [second, setSecond] = useState(1);
  const [timer, setTimer] = useState(timeLimit);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          setSecond(0);
          return 0;
        }

        setSecond(timer - 1);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (second === 0) {
    return (
      <BackgroundLayers>
        <Box
          sx={{
            height: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ModuleHeading sx={{ width: "75%", font: "600 40px Raleway" }}>
            Sorry, some Error occured in Gemini Api call as we're using the free
            version
          </ModuleHeading>
        </Box>
        <NextBtn onClick={() => navigate("/details")}>Go Back</NextBtn>
      </BackgroundLayers>
    );
  }

  return (
    <BackgroundLayers motionType={motionSlide} Overlaysx={overlaysx}>
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
