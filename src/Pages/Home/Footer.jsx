import {
  ButtonGroup,
  IconButton,
  Link,
  styled,
  Typography,
} from "@mui/material";
import logo from "../../assets/Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Wrapper = styled("div")(({ theme }) => ({
  height: "250px",
  display: "flex",
  backgroundColor: theme.palette.primary.darkOrange,
  padding: "80px 110px",
  //   justifyContent
}));
const InfoBox = styled("div")(({ theme, ...props }) => ({
  width: "30%",
  display: "flex",
  flexWrap: "wrap",
  gap: "35px",
}));
const LinkBox = styled("div")(({ theme, ...props }) => ({ width: "30%" }));
const ContactBox = styled("div")(({ theme, ...props }) => ({ width: "30%" }));
const Logo = styled("img")(({ theme, ...props }) => ({}));
const Text = styled(Typography)(({ theme, ...props }) => ({
  font: "300 17px Poppins",
  color: theme.palette.primary.text,
}));
const Icons = styled(ButtonGroup)(({ theme, ...props }) => ({
  "& button": {
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.primary.main,
    marginRight: "10px",
    borderRadius: "0",
  },
}));
const Icon = styled(IconButton)(({ theme, ...props }) => ({}));
const link = styled("div")(({ theme, ...props }) => ({}));

// const Copyright;

export default function Footer() {
  return (
    <Wrapper>
      <InfoBox>
        <Logo src={logo} sx={{ width: "350px" }}></Logo>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi
          reiciendis, nostrum harum repudiandae consequatur!
        </Text>
        <Icons>
          <Icon>
            <FacebookIcon />
          </Icon>
          <Icon>
            <InstagramIcon />
          </Icon>
          <Icon>
            <LinkedInIcon />
          </Icon>
        </Icons>
      </InfoBox>
      <LinkBox></LinkBox>
      <ContactBox></ContactBox>
    </Wrapper>
  );
}
