import { Box, styled, Typography } from "@mui/material";
import { letterSpacing } from "@mui/system";

// const Heading = styled(Typography)(({ theme, ...props }) => ({}));
const Text = styled(Typography)(({ theme, ...props }) => ({
  font: "600 17px Poppins",
  letterSpacing: "1.2px",
}));

const Content = ["Program", "Level", "Subject"];

const QuizInfoBox = ({ theme, ...props }) => {
  return (
    <Box sx={{ ...props.sx, width: "25%" }}>
      {Content.map((Title, idx) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            pt: "10px",
          }}
        >
          <Text sx={{ color: "primary.black" }}>{Title}: </Text>
          <Text sx={{ color: "primary.text", fontWeight: "400" }}>
            {props.content[idx]}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default QuizInfoBox;
