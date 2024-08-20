import { Container, SectionWrapper } from "./styled";
import { MainHeading } from "../../../Global/styled";

import UpdateIcon from "@mui/icons-material/Update";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import FeatureBox from "../../../Components/FeatureBox";
import Divider from "../../../Global/Divider";
import { featureText } from "../../../Global/Text";

const boxes = [
  {
    title: "Program-specific Quizzes",
    icon: AssignmentIcon,
  },
  {
    title: "Up-to-Date Questions",
    icon: UpdateIcon,
  },
  {
    title: "Performance Analytics",
    icon: QueryStatsIcon,
  },
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
          {boxes.map((box, idx) => (
            <FeatureBox
              Icon={box.icon}
              Title={box.title}
              Text={featureText[idx]}
              sx={idx === 1 ? centerBoxStyle : null}
            />
          ))}

          {/* <FeatureBox Icon={UpdateIcon} Title={firstTitle} Text={firstText} />
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
          /> */}
        </Container>
      </SectionWrapper>
    </>
  );
}
