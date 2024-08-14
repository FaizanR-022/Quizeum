import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter, createMarkup, handleApiCall } from "./helper";

import { HeroBox, ModuleHeading, NextBtn } from "../../../../Global/styled";
import Divider from "../../../../Global/Divider";
import { Question } from "./styled";
import { Box } from "@mui/material";
import OptionBox from "../../../../Components/OptionBox";
import QuizInfoBox from "../../../../Components/QuizInfoBox";
import { motionFade, motionSlide } from "../../../../Global/motionStyling";
import QuizLoader from "../../../../Global/Loader/QuizLoader";
import { selectedAnswer } from "../Store/QuestionsSlice";
import SkippedQuiz from "./SkippedQuiz";
import BackgroundLayers from "../../BackgroundLayers";

export default function Quiz() {
  const dispatch = useDispatch();
  const activeProgram = useSelector((state) => state.info.program);
  const activeLevel = useSelector((state) => state.info.level);
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState(0);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState("");
  const [skipped, setSkipped] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const keys = ["A", "B", "C", "D"];

  useEffect(() => {
    if (activeProgram && activeLevel) {
      // handleQuery(dispatch, activeProgram, activeLevel, setLoading);
      handleApiCall(dispatch, activeProgram, activeLevel, setLoading);
      // getData();
    }
  }, []);

  const data = useSelector((state) => state.questions);
  const content = [
    activeProgram,
    capitalizeFirstLetter(activeLevel?.toLowerCase()),
  ];

  const nextQues = () => {
    if (count == 4) {
      handleSubject();
      setCount(0);
    } else {
      setCount((prev) => prev + 1);
    }
    setSelected("");
  };

  const handleSubject = () => {
    if (subject == data.length - 1) {
      setIsComplete(true);
      return;
    }
    setSubject((prev) => prev + 1);
  };

  const handleSkip = () => {
    setSkipped((state) => [...state, { subject: subject, question: count }]);
    nextQues();
  };

  const handleNext = () => {
    dispatch(
      selectedAnswer({
        subject: subject,
        question: count,
        text: selected,
      })
    );
    nextQues();
  };

  const props = {
    skipped: skipped,
    content: content,
    data: data,
    activeProgram: activeProgram,
    activeLevel: activeLevel,
    keys: keys,
  };

  if (loading) {
    return <QuizLoader />;
  }

  if (isComplete && skipped) {
    return <SkippedQuiz {...props} />;
  }

  return (
    <BackgroundLayers motionType={motionFade}>
      <ModuleHeading sx={{ fontSize: "65px" }}> {count + 1}/5</ModuleHeading>
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
        <Question
          dangerouslySetInnerHTML={createMarkup(
            "✦&nbsp;&nbsp;" + data[subject].content[count].question
          )}
        >
          {/* ✦&nbsp;&nbsp;{data[subject].content[count].question} */}
        </Question>
        <Box
          sx={{
            width: "100%",
            pt: "20px",
            pl: "40px",
          }}
        >
          {data[subject].content[count].options.map((option, idx) => (
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
