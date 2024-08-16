import { Box, styled, Typography } from "@mui/material";
import { letterSpacing } from "@mui/system";

// const Heading = styled(Typography)(({ theme, ...props }) => ({}));
const Text = styled(Typography)(({ theme, ...props }) => ({
  font: "600 15px Poppins",
  letterSpacing: "1.2px",
}));

const Content = ["Program", "Level", "Subject"];

const QuizInfoBox = ({ theme, ...props }) => {
  return (
    <Box
      sx={{
        ...props.sx,
        width: "15%",
        backgroundColor: "primary.bgBlue",
        // border: (theme) => `2px solid ${theme.palette.primary.main}`,
        borderRadius: "15px",
        padding: "10px",
      }}
    >
      {Content.map((Title, idx) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "4px 0",
          }}
        >
          <Text sx={{ color: "primary.orange" }}>{Title}: </Text>
          <Text sx={{ color: "primary.text", fontWeight: "400" }}>
            {props.content[idx]}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default QuizInfoBox;
