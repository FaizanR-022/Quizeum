import { useTheme } from "@emotion/react";
import BackgroundLayers from "../../BackgroundLayers";
import { motionFade } from "../../../../Global/motionStyling";

export default function Results() {
  const theme = useTheme();

  return (
    <BackgroundLayers motionType={motionFade}>
      <h2></h2>
    </BackgroundLayers>
  );
}
