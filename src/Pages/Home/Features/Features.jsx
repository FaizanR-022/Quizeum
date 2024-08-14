import { Container, SectionWrapper } from "./styled";
import { MainHeading } from "../../../Global/styled";

import UpdateIcon from "@mui/icons-material/Update";
import FeatureBox from "../../../Components/FeatureBox";
import Divider from "../../../Global/Divider";

const Title = [
  "Program-specific Quizzes",
  "Up-to-Date Content",
  "Performance Analytics",
];

const firstTitle = "Up-to-Date Content";
const firstText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, distinctio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, distinctio.";

const centerBoxStyle = {
  border: (theme) => `2px dotted ${theme.palette.primary.orange}`,
  borderWidth: "0 2px",
};

export default function Features() {
  return (
    <>
      <SectionWrapper>
        <MainHeading sx={{ paddingBottom: "20px" }}>Features</MainHeading>
        <Divider />
        <Container>
          <FeatureBox
            Icon={UpdateIcon}
            Title={firstTitle}
            Text={firstText}
            // sx={{ borderRight: "1px solid orange" }}
          />
          <FeatureBox
            Icon={UpdateIcon}
            Title={firstTitle}
            Text={firstText}
            sx={{
              border: (theme) => `2px dotted ${theme.palette.primary.orange}`,
              borderWidth: "0 2px",
            }}
          />
          <FeatureBox
            Icon={UpdateIcon}
            Title={firstTitle}
            Text={firstText}
            // sx={{ borderLeft: "1px solid orange" }}
          />
        </Container>
      </SectionWrapper>
    </>
  );
}
