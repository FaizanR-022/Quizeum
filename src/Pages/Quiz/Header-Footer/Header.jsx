import { Box, styled, useTheme } from "@mui/material";
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const LogoBox = styled("img")(({ theme, ...props }) => ({
  height: "40px",
  cursor: "pointer",
}));

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        // padding: "15px 0",
        pt: "10px",
        pb: "15px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.bgBlue,
          width: "35%",
          height: "65px",
          borderRadius: "30px",
          border: `2px solid ${theme.palette.primary.orange}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LogoBox src={Logo} onClick={() => navigate("/")} />
      </Box>
    </Box>
  );
}
