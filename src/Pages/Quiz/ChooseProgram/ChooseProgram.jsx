import { ModuleHeading, ProgramContainer } from "../../../Global/styled";
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
import { useState } from "react";

export default function ChooseProgram() {
  const programs = [
    {
      Title: title01,
      Text: text01,
      onClick: () => {
        handleActive(title01);
      },
      sx: () => {
        return active === title01 ? activeStyle : null;
      },
    },
    {
      Title: title02,
      Text: text02,
      onClick: () => {
        handleActive(title02);
      },
      sx: () => {
        return active === title02 ? activeStyle : null;
      },
    },
    {
      Title: title03,
      Text: text03,
      onClick: () => {
        handleActive(title03);
      },
      sx: () => {
        return active === title03 ? activeStyle : null;
      },
    },
    {
      Title: title04,
      Text: text04,
      onClick: () => {
        handleActive(title04);
      },
      sx: () => {
        return active === title04 ? activeStyle : null;
      },
    },
  ];

  const [active, setActive] = useState("");

  const handleActive = (title) => {
    setActive(title);
  };

  const activeStyle = {
    border: (theme) => `3px solid ${theme.palette.primary.text}`,
  };

  return (
    <>
      <ModuleHeading>Select a Program</ModuleHeading>
      <Divider />
      <ProgramContainer sx={{ pt: "60px" }}>
        {programs.map((obj) => {
          return <ProgramsBox {...obj} homePage={false} />;
        })}

        {/* <ProgramsBox
          Title={title01}
          Text={text01}
          homePage={false}
          onClick={() => {
            handleActive(title01);
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
            handleActive(title02);
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
            handleActive(title03);
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
            handleActive(title04);
          }}
          sx={() => {
            return active === title04 ? activeStyle : null;
          }}
        /> */}
      </ProgramContainer>
    </>
  );
}
