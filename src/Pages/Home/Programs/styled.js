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
  height: "630px",
  padding: "110px 70px 150px 70px",
  textAlign: "center",
}));

export { SectionWrapper, BgImage };
