import {
  Box,
  ButtonGroup,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import logo from "../../../assets/Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";

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
  gap: "20px",

  "& li": {
    color: theme.palette.primary.text,
    font: "400 14px Poppins",
    paddingLeft: "5px",
  },

  "& ul": {
    paddingTop: "0",
  },

  "& svg": {
    height: "0.8em",
    width: "0.8em",
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

const contact = [
  {
    icon: CallIcon,
    text: "+92 300 1234567",
  },
  {
    icon: EmailIcon,
    text: "faizanraza405@yahoo.com",
  },
];

// const Copyright;

export default function Footer() {
  const navigate = useNavigate();
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
          Empowering your journey to academic excellence with tailored quizzes
          designed for your ultimate exam success.
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
          <ListItem
            onClick={() => navigate("/details")}
            sx={{ cursor: "pointer" }}
          >
            Programs
          </ListItem>
          {/* </Link> */}
        </List>
      </Div>
      <Div>
        <Heading>Contact Info</Heading>
        {contact.map((content) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {" "}
            <content.icon
              sx={{
                color: "primary.text",
                backgroundColor: "primary.main",
                padding: "7px",
                borderRadius: "5px",
              }}
            />
            <Typography>{content.text}</Typography>
          </Box>
        ))}
      </Div>
    </Wrapper>
  );
}
