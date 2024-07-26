import { Grid } from "@mui/material";
import ProgramsBox from "../../../Components/ProgramsBox";
import { MainHeading, ProgramContainer } from "../../../Global/styled";
import Divider from "../../../Global/Divider";
import { BgImage, SectionWrapper } from "./styled";
import { programContent } from "../../../Global/Text";

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
          {programContent.map((program) => {
            return <ProgramsBox {...program} />;
          })}
        </ProgramContainer>
      </SectionWrapper>
    </BgImage>
  );
};

export default Programs;
