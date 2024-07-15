import { Grid } from "@mui/material";
import ProgramsBox from "../../../Components/ProgramsBox";
import { MainHeading } from "../../../Global/styled";
import Divider from "../../../Global/Divider";
import { BgImage, Container, SectionWrapper } from "./styled";

const title01 = "BCAT ";
const text01 = "IBA | LUMS | SZABIST | IOBM";

const title02 = "ECAT ";
const text02 = "FAST | NED | NUST | GIKI";
const title03 = "MDCAT ";
const text03 = "DOW | JINNAH | AKU | ZU";
const title04 = "SAT ";
const text04 = "INTERNATIONAL UNIVERSITIES";

// export default Programs;
const Programs = () => {
  return (
    <BgImage>
      <SectionWrapper>
        <MainHeading sx={{ paddingBottom: "20px" }}>Programs</MainHeading>
        <Divider />
        <Container>
          {/* <Grid item xs={10}>
            <ProgramsBox Title={title} Text={text} />
          </Grid>
          <Grid item xs={10}>
            <ProgramsBox Title={title} Text={text} />
          </Grid>
          <Grid item xs={10}>
            <ProgramsBox Title={title} Text={text} />
          </Grid> */}
          <ProgramsBox Title={title01} Text={text01} />
          <ProgramsBox Title={title02} Text={text02} />
          <ProgramsBox Title={title03} Text={text03} />
          <ProgramsBox Title={title04} Text={text04} />
        </Container>
      </SectionWrapper>
    </BgImage>
  );
};

export default Programs;
