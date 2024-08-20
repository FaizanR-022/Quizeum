import { styled } from "@mui/material";

const SectionWrapper = styled("div")(({ theme, ...props }) => ({
  height: "650px",
  backgroundColor: theme.palette.primary.bgBlue,
  textAlign: "center",
  padding: "110px 80px 150px 80px",
}));

const Container = styled("div")(() => ({
  display: "flex",
  gap: "20px",
  padding: "110px 0 0 0",
  alignItems: "center",
  // flexWrap: "wrap"
}));

const ImageContainer = styled("div")(() => ({
  width: "60%",
  paddingBottom: "20px",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
}));

const Image = styled("img")(() => ({
  height: "480px",
}));

export { SectionWrapper, Container, Image, ImageContainer };
