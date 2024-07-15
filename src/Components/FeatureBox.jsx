import { styled, Typography } from "@mui/material";

const Heading = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.text,
  font: "600 35px Raleway",
  paddingBottom: "25px",
}));

const Content = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.text,
  font: "300 17px Poppins",
  padding: "0 20px",
}));

const Box = styled("div")(({ theme, ...props }) => ({
  height: "400px",
  width: "28%",
  padding: "10px 20px",
  //   padding: '
}));

const FeatureBox = ({ Icon, Title, Text, ...props }) => {
  return (
    <Box {...props}>
      <Icon
        sx={{
          fontSize: "130px",
          color: "primary.orange",
          paddingBottom: "55px",
        }}
      />
      <Heading>{Title}</Heading>
      <Content>{Text}</Content>
    </Box>
  );
};

export default FeatureBox;
