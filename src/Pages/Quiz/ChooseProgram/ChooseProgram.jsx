import {
  MainHeading,
  ModuleHeading,
  Overlay,
  ProgramContainer,
} from "../../../Global/styled";
import {
  title01,
  title02,
  title03,
  title04,
  text01,
  text02,
  text03,
  text04,
} from "../../../Global/Text";

import ProgramsBox from "../../../Components/ProgramsBox";
import Divider from "../../../Global/Divider";
import { Wrapper, HeroBox } from "./styled";
import { useState } from "react";

export default function ChooseProgram() {
  const [active, setActive] = useState("");

  const onClick = (title) => {
    handleActive(title);
  };

  const handleActive = (title) => {
    setActive(title);
  };

  const activeStyle = {
    border: (theme) => `3px solid ${theme.palette.primary.text}`,
  };

  return (
    <Wrapper>
      <Overlay>
        <HeroBox>
          <ModuleHeading>Choose a Program</ModuleHeading>
          <Divider />
          <ProgramContainer sx={{ pt: "60px" }}>
            {" "}
            {/* add sx padding 50 0 0 0 */}
            <ProgramsBox
              Title={title01}
              Text={text01}
              homePage={false}
              onClick={() => {
                onClick(title01);
              }}
              sx={() => {
                return active === title01 ? activeStyle : null;
              }}
            />
            <ProgramsBox
              Title={title02}
              Text={text02}
              homePage={false}
              onClick={() => {
                onClick(title02);
              }}
              sx={() => {
                return active === title02 ? activeStyle : null;
              }}
            />
            <ProgramsBox
              Title={title03}
              Text={text03}
              homePage={false}
              onClick={() => {
                onClick(title03);
              }}
              sx={() => {
                return active === title03 ? activeStyle : null;
              }}
            />
            <ProgramsBox
              Title={title04}
              Text={text04}
              homePage={false}
              onClick={() => {
                onClick(title04);
              }}
              sx={() => {
                return active === title04 ? activeStyle : null;
              }}
            />
          </ProgramContainer>
        </HeroBox>
      </Overlay>
    </Wrapper>
  );
}
