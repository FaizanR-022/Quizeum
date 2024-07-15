import { Container, SectionWrapper } from "./styled";
import { MainHeading } from "../../../Global/styled";

import UpdateIcon from "@mui/icons-material/Update";
import FeatureBox from "../../../Components/FeatureBox";
import Divider from "../../../Global/Divider";

const firstTitle = "Up-to-Date Content";
const firstText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, distinctio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, distinctio.";

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
