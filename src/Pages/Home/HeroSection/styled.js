import { Button, Typography, styled } from "@mui/material";
import BgImg from "../../../assets/Herobg3.jpg";
import Bg from "../../../assets/5570852.jpg";
import Bg2 from "../../../assets/featureBg.jpg";

const SectionWrapper = styled("div")(() => ({
  display: "block",
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const BgImage = styled("div")(() => ({
  backgroundColor: "rgba(0, 0,0,0.9)",
  display: "flex",
  height: "750px",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "80px",
  paddingBottom: "100px",
}));

const HeroBox = styled("div")(({ theme, ...props }) => ({
  height: "85%",
  width: "80%",
  borderRadius: "15px",
  // backgroundColor: "rgba(4, 57, 39, 0.7)",
  // backgroundColor: "rgba(47, 72, 88, 0.6)",
  backgroundColor: theme.palette.primary.HeroBg,
  padding: "0 40px",
  display: "flex",
}));

const TextSection = styled("div")(({ theme, ...props }) => ({
  color: theme.palette.primary.text,
  alignContent: "center",
  padding: "0 140px 0 0",
}));

const ImageSection = styled("div")(() => ({}));
const Image = styled("img")(() => ({
  height: "620px",
  paddingBottom: "40px",
}));

const SubHeading = styled(Typography)(({ theme, ...props }) => ({
  font: "20px Verdana",
  lineHeight: "32px",
  letterSpacing: "2px",
  paddingBottom: "50px",
}));

const CTAbtn = styled(Button)(({ theme, ...props }) => ({
  font: "700 20px Raleway",
  padding: "15px",
  margin: "15px 0",
  // borderRadius: "25px",
  backgroundColor: theme.palette.primary.orange,
  color: theme.palette.primary.text,
  letterSpacing: "3px",

  "&: hover": {
    backgroundColor: theme.palette.primary.darkOrange,
    color: theme.palette.primary.text,
    transition: "all 0.4s ease",
  },
}));
export {
  SectionWrapper,
  BgImage,
  HeroBox,
  TextSection,
  ImageSection,
  Image,
  SubHeading,
  CTAbtn,
};
