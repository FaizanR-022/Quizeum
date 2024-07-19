import {
  ButtonGroup,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import logo from "../../assets/Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";

const href = "https://www.linkedin.com/in/faizan-raza-302360245/";

const Wrapper = styled("div")(({ theme, ...props }) => ({
  height: "220px",
  display: "flex",
  backgroundColor: theme.palette.primary.darkOrange,
  padding: "70px 100px",
  justifyContent: "space-between",
  color: theme.palette.primary.text,
}));

const Div = styled("div")(({ theme, ...props }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "column",

  "& li": {
    color: theme.palette.primary.text,
    font: "400 14px Poppins",
    paddingLeft: "5px",
  },
}));

const Logo = styled("img")(({ theme, ...props }) => ({
  width: "300px",
}));

const Text = styled(Typography)(({ theme, ...props }) => ({
  font: "300 15px Poppins",
}));

const Icons = styled(ButtonGroup)(({ theme, ...props }) => ({
  "& button": {
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.primary.main,
    marginRight: "10px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  },

  "& button:hover": {
    backgroundColor: theme.palette.primary.orange,
  },
}));

const Heading = styled(Typography)(({ theme, ...props }) => ({
  font: "700 20px Raleway",
  color: theme.palette.primary.main,
  paddingBottom: "15px",
}));

const link = styled("div")(({ theme, ...props }) => ({}));

// const Copyright;

export default function Footer() {
  return (
    <Wrapper>
      <Div
        sx={{
          gap: "30px",
          paddingRight: "20px",
        }}
      >
        {/* <Link to="/">  Add link tag from react-router-dom */}
        <Logo src={logo}></Logo>
        {/* </Link> */}
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi animi
          reiciendis, nostrum harum repudiandae consequatur!
        </Text>
        <Icons>
          <Link href={href} target="_blank">
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href={href} target="_blank">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Link>
          <Link href={href} target="_blank">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Icons>
      </Div>
      <Div
        sx={{
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <Heading>Quick Links</Heading>
        <List>
          <Link underline="none" href="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link underline="none" href="/">
            <ListItem>Programs</ListItem>
          </Link>
          <Link underline="none" href="/">
            <ListItem>Your Record</ListItem>
          </Link>
          <Link underline="none" href="/">
            <ListItem>Success Stories</ListItem>
          </Link>
        </List>
      </Div>
      <Div>
        <Heading>Contact Info</Heading>
        <span>
          {" "}
          <CallIcon
            sx={{
              color: "primary.text",
              backgroundColor: "primary.main",
              padding: "7px",
              borderRadius: "5px",
            }}
          />
        </span>
      </Div>
    </Wrapper>
  );
}
