import { styled } from "@mui/material";
import bgImg from "../../../assets/Herobg3.jpg";

const Wrapper = styled("div")(({ theme, ...props }) => ({
  backgroundColor: "#000",
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const HeroBox = styled("div")(({ theme, ...props }) => ({
  height: "85%",
  width: "80%",
  borderRadius: "15px",
  backgroundColor: theme.palette.primary.darkOrange,
  padding: "20px 0",
  display: "block",
  textAlign: "center",
}));

const activeStyle = {
  border: (theme) => `3px solid ${theme.palette.primary.text}`,
};

// Box heights of steps
const boxHeight = {
  height: "50vh",
  pt: "60px",
};

export { Wrapper, HeroBox, activeStyle, boxHeight };
