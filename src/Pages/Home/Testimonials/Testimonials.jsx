import { styled } from "@mui/material";
import TestimonialBox from "../../../Components/TestimonialBox";
import { Container, Image, ImageContainer, SectionWrapper } from "./styled";
import { MainHeading } from "../../../Global/styled";
import Divider from "../../../Global/Divider";
import image from "../../../assets/reviews2.png";

const content = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas dolorem fugit cupiditate architecto minus unde optio, nostrum alias neque. Culpa, id quis quo dolorem accusantium commodi facilis fuga maxime odit, ipsa aspernatur ratione quasi?",
    name: "Maqbool Tariq",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas dolorem fugit cupiditate architecto minus unde optio, nostrum alias neque. Culpa, id quis quo dolorem accusantium commodi facilis fuga maxime odit, ipsa aspernatur ratione quasi?",
    name: "Zahid Hussain",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas dolorem fugit cupiditate architecto minus unde optio, nostrum alias neque. Culpa, id quis quo dolorem accusantium commodi facilis fuga maxime odit, ipsa aspernatur ratione quasi?",
    name: "Subhan Siddiqui",
  },
];

const Testimonials = () => {
  return (
    <SectionWrapper>
      <MainHeading>Testimonials</MainHeading>
      <Divider />
      <Container>
        <TestimonialBox content={content} />
        <ImageContainer>
          <Image src={image}></Image>
        </ImageContainer>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonials;
