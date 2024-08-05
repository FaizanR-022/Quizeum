import { ModuleHeading, ProgramContainer } from "../../../Global/styled";
import { subjects } from "../../../Global/Text";

import ProgramsBox from "../../../Components/ProgramsBox";
import Divider from "../../../Global/Divider";
import { useState } from "react";
import { activeStyle, boxHeight } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectProgram } from "./Store/Slice";

export default function ChooseProgram() {
  const dispatch = useDispatch();
  const activeTitle = useSelector((state) => state.info.program);

  const onClick = (title, text) => {
    return {
      Title: title,
      Text: text,
      onClick: () => {
        // handleActive(title);
        dispatch(selectProgram(title));
      },
      sx: () => {
        return activeTitle === title ? activeStyle : null;
      },
    };
  };

  return (
    <>
      <ModuleHeading>Select a Program</ModuleHeading>
      <Divider />
      <ProgramContainer sx={{ ...boxHeight }}>
        {subjects.map((subject) => {
          return (
            <ProgramsBox
              {...onClick(subject.title, subject.text)}
              homePage={false}
            />
          );
        })}
      </ProgramContainer>
    </>
  );
}
