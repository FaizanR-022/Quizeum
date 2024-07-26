import { List, ListItem, styled } from "@mui/material";
import Divider from "../../../Global/Divider";
import { ModuleHeading, ProgramContainer } from "../../../Global/styled";
import { instructions } from "../../../Global/Text";
import { boxHeight } from "./styled";

const Box = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  justifyContent: "center",

  "& ul": {},

  "& li": {
    font: "400 22px Poppins",
    color: theme.palette.primary.text,
    paddingBottom: "30px",
    textAlign: "left",
    paddingLeft: "20px",
  },
}));

export default function Instructions() {
  return (
    <>
      <ModuleHeading>Read Instructions Carefully</ModuleHeading>
      <Divider />
      <Box sx={{ ...boxHeight }}>
        <ul>
          {instructions.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>
        {/* <List>
          {instructions.map((point) => {
            return <ListItem>{point}</ListItem>;
          })}
        </List> */}
      </Box>
    </>
  );
}
