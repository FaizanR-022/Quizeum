import { Button, Link, styled } from "@mui/material";
import Logo from "../../assets/Logo.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Wrapper = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  height: "100px",
  justifyContent: "flex-start",
  //   alignContent: "center",
  //   alignSelf: "center",
  backgroundColor: theme.palette.primary.darkOrange,
}));

// const LogoBox = styled("div")(() => ({}));
// const LogoBox = styled("div")(() => ({}));

const LogoBox = styled("div")(({ theme, ...props }) => ({
  width: "60%",
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  //   textAlign: "center",
}));

const BtnBox = styled("div")(({ theme, ...props }) => ({
  width: "33%",
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
  padding: "12px 15px",
  font: "700 20px Raleway",
  borderRadius: "6px",
  border: `2px solid ${theme.palette.primary.main}`,
  transition: "all 0.3s ease",

  "&: hover": {
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.orange}`,
  },
}));

// const NavBar = styled("nav")(({ theme, ...props }) => ({}));

export default function Header() {
  return (
    <Wrapper>
      <LogoBox>
        <LogoImg src={Logo}></LogoImg>
      </LogoBox>
      <BtnBox>
        <Btn endIcon={<DoubleArrowIcon />}>Start Now</Btn>
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
  );
}
