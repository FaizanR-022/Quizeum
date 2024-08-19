import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.bgBlue",
        height: "30px",
      }}
    >
      <Typography
        sx={{
          font: "400 12px Poppins",
          textAlign: "center",
          color: "primary.text",
          letterSpacing: "1.2px",
          pt: "5px",
        }}
      >
        Designed by{" "}
        <strong>
          <Link
            href="https://www.linkedin.com/in/faizan-raza-302360245/"
            target="_blank"
            color="primary.orange"
            underline="none"
          >
            Faizan Raza
          </Link>{" "}
        </strong>
        | © 2024
      </Typography>
    </Box>
  );
}
