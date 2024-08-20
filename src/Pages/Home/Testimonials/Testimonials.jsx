import { styled } from "@mui/material";
import TestimonialBox from "../../../Components/TestimonialBox";
import { Container, Image, ImageContainer, SectionWrapper } from "./styled";
import { MainHeading } from "../../../Global/styled";
import Divider from "../../../Global/Divider";
import image from "../../../assets/reviews2.png";
import { testimonialContent } from "../../../Global/Text";

const Testimonials = () => {
  return (
    <SectionWrapper>
      <MainHeading>Testimonials</MainHeading>
      <Divider />
      <Container>
        <TestimonialBox content={testimonialContent} />
        <ImageContainer>
          <Image src={image}></Image>
        </ImageContainer>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonials;
