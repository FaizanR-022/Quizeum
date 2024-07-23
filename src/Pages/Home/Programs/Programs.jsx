import { Grid } from "@mui/material";
import ProgramsBox from "../../../Components/ProgramsBox";
import { MainHeading, ProgramContainer } from "../../../Global/styled";
import Divider from "../../../Global/Divider";
import { BgImage, SectionWrapper } from "./styled";
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

// export default Programs;
const Programs = () => {
  return (
    <BgImage>
      <SectionWrapper>
        <MainHeading sx={{ paddingBottom: "20px" }}>Programs</MainHeading>
        <Divider />
        <ProgramContainer
          sx={{
            padding: "130px 0 0 0",
          }}
        >
          <ProgramsBox Title={title01} Text={text01} />
          <ProgramsBox Title={title02} Text={text02} />
          <ProgramsBox Title={title03} Text={text03} />
          <ProgramsBox Title={title04} Text={text04} />
        </ProgramContainer>
      </SectionWrapper>
    </BgImage>
  );
};

export default Programs;
