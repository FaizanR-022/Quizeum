import { Grid, styled } from "@mui/material";
import BgImg from "../../../assets/programsBg2.jpg";

const BgImage = styled("div")(() => ({
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
}));

const SectionWrapper = styled("div")(() => ({
  backgroundColor: "rgba(0,0,0,0.85)",
  height: "700px",
  padding: "110px 70px 150px 70px",
  textAlign: "center",
}));

const Container = styled("div")(() => ({
  display: "flex",
  padding: "130px 0 0 0",
  // grid: "",
  gap: "50px",
  flexWrap: "wrap",
  justifyContent: "center",
}));

export { SectionWrapper, BgImage, Container };
