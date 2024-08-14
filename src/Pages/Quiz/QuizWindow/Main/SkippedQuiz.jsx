import { useDispatch } from "react-redux";
import { useState } from "react";
import { capitalizeFirstLetter } from "./helper";
import { ModuleHeading, NextBtn } from "../../../../Global/styled";
import Divider from "../../../../Global/Divider";
import { Question } from "./styled";
import { Box } from "@mui/material";
import OptionBox from "../../../../Components/OptionBox";
import QuizInfoBox from "../../../../Components/QuizInfoBox";
import { motionFade } from "../../../../Global/motionStyling";
import { selectedAnswer } from "../Store/QuestionsSlice";
import BackgroundLayers from "../../BackgroundLayers";

export default function SkippedQuiz({
  skipped,
  content,
  data,
  activeProgram,
  activeLevel,
  keys,
  ...props
}) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const subject = skipped[count].subject;
  const question = skipped[count].question;
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    dispatch(
      selectedAnswer({
        subject: subject,
        question: count,
        text: selected,
      })
    );
    setCount((prev) => prev + 1);
    setSelected("");
  };

  const handleSkip = () => {
    setCount((prev) => prev + 1);
    setSelected("");
  };

  return (
    <BackgroundLayers motionType={motionFade}>
      <ModuleHeading sx={{ fontSize: "65px" }}>Skipped Questions</ModuleHeading>
      <QuizInfoBox
        content={[...content, capitalizeFirstLetter(data[subject]?.name)]}
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
          ✦&nbsp;&nbsp;{data[subject].content[question].question}
        </Question>
        <Box
          sx={{
            width: "100%",
            pt: "20px",
            pl: "40px",
          }}
        >
          {data[subject].content[question].options.map((option, idx) => (
            <OptionBox
              btn={keys[idx]}
              text={option}
              onClick={() => {
                setSelected(option);
              }}
              active={selected === option ? true : false}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: "20px" }}>
        <NextBtn onClick={handleSkip}>Skip</NextBtn>
        <NextBtn onClick={handleNext} disabled={selected ? false : true}>
          Next
        </NextBtn>
      </Box>
    </BackgroundLayers>
  );
}
