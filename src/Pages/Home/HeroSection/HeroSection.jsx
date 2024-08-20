import {
  SectionWrapper,
  BgImage,
  HeroBox,
  TextSection,
  ImageSection,
  Image,
  SubHeading,
  CTAbtn,
} from "./styled";

import { MainHeading, Overlay } from "../../../Global/styled";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import HeroImg from "../../../assets/heroimg3.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <Overlay
        sx={{
          height: "750px",
          pt: "150px",
          backgroundColor: "rgba(0,0,0,0.93)",
          // pb: "100px",
        }}
      >
        <HeroBox>
          <TextSection>
            <MainHeading sx={{ paddingBottom: "30px" }}>
              Ace your Entrance Exam!
            </MainHeading>
            <SubHeading>
              Your pathway to exam success for your dream university starts here
              with our comprehensive quiz preparation.
            </SubHeading>
            <CTAbtn
              endIcon={<DoubleArrowIcon />}
              onClick={() => navigate("/details")}
              variant="outlined"
            >
              Let's Begin
            </CTAbtn>
          </TextSection>
          <ImageSection>
            <Image src={HeroImg}></Image>
          </ImageSection>
        </HeroBox>
      </Overlay>
    </SectionWrapper>
  );
}
