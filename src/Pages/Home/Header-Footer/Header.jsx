import { Box, Button, Link, styled } from "@mui/material";
import Logo from "../../../assets/Logo.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div")(({ theme, ...props }) => ({
  width: "60%",
  borderRadius: "30px",
  marginTop: "20px",
  border: `2px solid ${theme.palette.primary.orange}`,
  display: "flex",
  height: "70px",
  justifyContent: "center",
  alignContent: "center",
  // alignSelf: "center",
  backgroundColor: theme.palette.primary.darkOrange,
  position: "absolute",
  zIndex: "10",
}));

// const LogoBox = styled("div")(() => ({}));
// const LogoBox = styled("div")(() => ({}));

const LogoBox = styled("div")(({ theme, ...props }) => ({
  width: "42%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex=start",
  //   textAlign: "center",
}));

const BtnBox = styled("div")(({ theme, ...props }) => ({
  width: "42%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

const LogoImg = styled("img")(({ theme, ...props }) => ({
  height: "60%",
}));

const Btn = styled(Button)(({ theme, ...props }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.text,
  padding: "8px 10px",
  font: "600 15px Raleway",
  borderRadius: "6px",
  border: `2px solid ${theme.palette.primary.main}`,
  transition: "all 0.3s ease",

  "&: hover": {
    backgroundColor: theme.palette.primary.bgBlue,
    // border: `2px solid ${theme.palette.primary.orange}`,
  },
}));

// const NavBar = styled("nav")(({ theme, ...props }) => ({}));

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Wrapper>
        <LogoBox>
          <LogoImg src={Logo}></LogoImg>
        </LogoBox>
        <BtnBox>
          <Btn
            endIcon={<DoubleArrowIcon />}
            onClick={() => navigate("/details")}
          >
            Start Now
          </Btn>
        </BtnBox>
        {/* <NavBar>
        <ul>
            <li>Home</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </NavBar> */}
      </Wrapper>
    </Box>
  );
}
