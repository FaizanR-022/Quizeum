import { styled } from "@mui/material";
import { PieChart, useDrawingArea } from "@mui/x-charts";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.primary.text,
  fontFamily: "Poppins",
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: "14px",
  fontWeight: "600",
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function SinglePieChart({ result }) {
  const data = [
    { value: result.correct, color: "green" },
    { value: result.skip, color: "gray" },
    { value: result.wrong, color: "red" },
  ];

  const size = {
    width: 420,
    height: 220,
  };

  return (
    <PieChart series={[{ data, innerRadius: 65 }]} {...size}>
      <PieCenterLabel>{result.name}</PieCenterLabel>
    </PieChart>
  );
}
