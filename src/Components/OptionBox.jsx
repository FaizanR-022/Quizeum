import { Box, styled, Typography } from "@mui/material";

// const Box
const Btn = styled("button")(({ theme, ...props }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  padding: "8px 15px",
  backgroundColor: "rgba(0,0,0,0)",
  color: theme.palette.primary.main,
  fontWeight: "700",
  borderRadius: "75px",
  //   borderRadius: "50%",
  //   borderRadius: "8px",
  fontSize: "15px",
  transition: "all 0.3s ease",
  cursor: "pointer",

  "&: hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.text,
  },
}));
const Text = styled(Typography)(({ theme, ...props }) => ({
  font: "400 25px Poppins",
  letterSpacing: "1.2px",
  textAlign: "left",
}));

const OptionBox = ({ theme, ...props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        pt: "36px",
      }}
    >
      <Btn>{props.btn}</Btn>
      <Text>{props.text}</Text>
    </Box>
  );
};

export default OptionBox;
