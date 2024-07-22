import { styled } from "@mui/material";

const Wrapper = styled("div")(({ theme, ...props }) => ({
  height: "100vh",
}));

export default function ChooseProgram() {
  return <Wrapper></Wrapper>;
}
