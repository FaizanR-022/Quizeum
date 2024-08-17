import { styled, useTheme } from "@mui/material";
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
  const theme = useTheme();
  const data = [
    {
      value: result.correct,
      color: theme.palette.primary.green,
      label: "correct",
    },
    { value: result.skip, color: "gray", label: "skip" },
    { value: result.wrong, color: theme.palette.primary.red, label: "wrong" },
  ];

  const props = {
    width: 320,
    height: 220,
    // margin: 0,
    margin: { right: 5 },
    slotProps: {
      legend: { hidden: true },
    },
  };

  return (
    <PieChart series={[{ data, innerRadius: 65 }]} {...props}>
      <PieCenterLabel>{result.name}</PieCenterLabel>
    </PieChart>
  );
}
