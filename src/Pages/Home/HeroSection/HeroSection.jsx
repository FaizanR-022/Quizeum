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

export default function HeroSection() {
  return (
    <SectionWrapper>
      <Overlay
        sx={{
          height: "750px",
          pt: "80px",
          pb: "100px",
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
            <CTAbtn endIcon={<DoubleArrowIcon />} variant="outlined">
              LEt's Begin
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
