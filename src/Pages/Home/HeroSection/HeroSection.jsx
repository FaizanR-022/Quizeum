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

import { MainHeading } from "../../../Global/styled";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import HeroImg from "../../../assets/heroimg3.png";

export default function HeroSection() {
  return (
    <SectionWrapper>
      <BgImage>
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
      </BgImage>
    </SectionWrapper>
  );
}
