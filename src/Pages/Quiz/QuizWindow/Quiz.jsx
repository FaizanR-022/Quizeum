import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter, handleQuery } from "./helper";
import { HeroBox, Wrapper } from "../FirstWindow/styled";
import {
  BackgroundLayer,
  ModuleHeading,
  NextBtn,
  Overlay,
} from "../../../Global/styled";
import Divider from "../../../Global/Divider";
import { Question } from "./styled";
import { Box } from "@mui/material";
import OptionBox from "../../../Components/OptionBox";
import QuizInfoBox from "../../../Components/QuizInfoBox";
import { motion } from "framer-motion";
import { motionFade, motionSlide } from "../../../Global/motionStyling";

export default async function Quiz() {
  const dispatch = useDispatch();
  const activeProgram = useSelector((state) => state.info.program);
  const activeLevel = useSelector((state) => state.info.level);

  useEffect(() => {
    console.log("hello");
    if (activeProgram && activeLevel) {
      handleQuery(dispatch, activeProgram, activeLevel);
    }
  }, []);

  const data = await useSelector((state) => state.questions);
  const content = [
    activeProgram,
    capitalizeFirstLetter(activeLevel?.toLowerCase()),
  ];

  const [subject, setSubject] = useState(0);
  const [count, setCount] = useState(0);

  const handleSubject = () => {
    if (subject == data.length - 1) {
      // navigate
    }
    setSubject((prev) => prev + 1);
  };

  const handleNext = () => {
    if (count == 4) {
      handleSubject();
      return;
    }
    setCount((prev) => prev + 1);
  };

  return (
    <BackgroundLayer>
      <motion.div {...motionFade}>
        <Wrapper>
          <Overlay>
            <HeroBox>
              {/* {data.map((subject) => subject.content.map((obj) => <></>))} */}
              <ModuleHeading sx={{ fontSize: "65px" }}>
                {" "}
                {count + 1}/5
              </ModuleHeading>
              <QuizInfoBox
                content={[
                  ...content,
                  capitalizeFirstLetter(data[subject]?.name),
                ]}
                sx={{ position: "absolute", right: "20px", top: "65px" }}
              />
              <Divider />
              <Box
                sx={{
                  textAlign: "left",
                  padding: "50px 100px",
                  color: "primary.text",
                  height: "50vh",
                }}
              >
                <Question>
                  ✦&nbsp;&nbsp;{data[subject].content[count].question}
                </Question>
                <Box
                  sx={{
                    width: "40%",
                    pt: "20px",
                    pl: "40px",
                  }}
                >
                  <OptionBox btn="A" text="Six" />
                  <OptionBox btn="B" text="Seven" />
                  <OptionBox btn="C" text="Eight" />
                  <OptionBox btn="D" text="Nine" />
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-end", pr: "20px" }}
              >
                <NextBtn>Skip</NextBtn>
                <NextBtn onClick={handleNext}>Next</NextBtn>
              </Box>
            </HeroBox>
          </Overlay>
        </Wrapper>
      </motion.div>
    </BackgroundLayer>
  );
}
