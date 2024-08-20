import { Box } from "@mui/material";
import "./Loader.css";
import { BackgroundLayer } from "../styled";
import { motion } from "framer-motion";
import { motionFade } from "../motionStyling";
import Header from "../../Pages/Home/Header-Footer/Header";
import Footer from "../../Pages/Home/Header-Footer/Footer";

export default function Loader() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div className="loader"></div>
    </Box>
  );
}
