import { Margin } from "@mui/icons-material";
import { Typography, styled } from "@mui/material";
import BgImg from "../../../assets/featureBg.jpg";

// const BgImage = styled("div")(() => ({
//   backgroundImage: `url(${BgImg})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundAttachment: "fixed",
// }));

const SectionWrapper = styled("div")(({ theme, ...props }) => ({
  height: "630px",
  backgroundColor: theme.palette.primary.bgBlue,
  // backgroundColor: "rgba(0, 21, 36, 0.7)",
  textAlign: "center",
  padding: "110px 70px 150px 70px",
}));

const Container = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  padding: "130px 0 0 0",
  justifyContent: "center",
  alignItems: "center",
}));

export { SectionWrapper, Container };
