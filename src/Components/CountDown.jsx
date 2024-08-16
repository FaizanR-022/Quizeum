import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function CountDown({
  initialTime,
  minute,
  second,
  setMinute,
  setSecond,
  ...props
}) {
  const [timer, setTimer] = useState(initialTime);

  const theme = useTheme();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  setMinute(Math.floor(timer / 60));
  setSecond(Math.floor(timer % 60));

  return (
    <Box
      sx={{
        borderRadius: "15px",
        backgroundColor: theme.palette.primary.bgBlue,
        height: "50px",
        width: "120px",
        alignContent: "center",
        ...props.sx,
      }}
    >
      <Typography
        sx={{
          font: "500 20px Poppins",
          color: theme.palette.primary.text,
        }}
      >
        {minute < 10 ? "0" : null}
        {minute} : {second < 10 ? "0" : null}
        {second}
      </Typography>
    </Box>
  );
}
