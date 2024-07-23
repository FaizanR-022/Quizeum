import { styled } from "@mui/material";
import bgImg from "../../assets/Herobg3.jpg";
import {
  MainHeading,
  ModuleHeading,
  Overlay,
  ProgramContainer,
} from "../../Global/styled";
import {
  title01,
  title02,
  title03,
  title04,
  text01,
  text02,
  text03,
  text04,
} from "../../Global/Text";

import ProgramsBox from "../../Components/ProgramsBox";
import Divider from "../../Global/Divider";

const Wrapper = styled("div")(({ theme, ...props }) => ({
  backgroundColor: "#000",
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const HeroBox = styled("div")(({ theme, ...props }) => ({
  height: "85%",
  width: "80%",
  borderRadius: "15px",
  backgroundColor: theme.palette.primary.darkOrange,
  padding: "20px 0",
  display: "block",
  textAlign: "center",
}));

export default function ChooseProgram() {
  return (
    <Wrapper>
      <Overlay>
        <HeroBox>
          <ModuleHeading>Choose a Program</ModuleHeading>
          <Divider />
          <ProgramContainer sx={{ pt: "60px" }}>
            {" "}
            {/* add sx padding 50 0 0 0 */}
            <ProgramsBox Title={title01} Text={text01} homePage={false} />
            <ProgramsBox Title={title02} Text={text02} homePage={false} />
            <ProgramsBox Title={title03} Text={text03} homePage={false} />
            <ProgramsBox Title={title04} Text={text04} homePage={false} />
          </ProgramContainer>
        </HeroBox>
      </Overlay>
    </Wrapper>
  );
}
