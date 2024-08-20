import { Box } from "@mui/material";
import ProgramsBox from "../../../../Components/ProgramsBox";
import Divider from "../../../../Global/Divider";
import { ModuleHeading, ProgramContainer } from "../../../../Global/styled";
import { activeStyle, boxHeight } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { selectLevel } from "../Store/Slice";

export default function ChooseLevels() {
  const levels = ["EASY", "MEDIUM", "HARD"];

  const dispatch = useDispatch();
  const activeLevel = useSelector((state) => state.info.level);

  const onClick = (title) => {
    return {
      Title: title,
      onClick: () => {
        dispatch(selectLevel(title));
      },
      sx: () => {
        return {
          height: "80px",
          width: "40%",
          ...(activeLevel === title
            ? {
                ...activeStyle,
              }
            : {}),
        };
      },
    };
  };

  return (
    <>
      <ModuleHeading>Select a Level</ModuleHeading>
      <Divider />
      <ProgramContainer
        sx={{ flexDirection: "column", gap: "25px", ...boxHeight }}
      >
        {levels.map((level) => {
          return <ProgramsBox {...onClick(level)} homepage={false} />;
        })}
      </ProgramContainer>
    </>
  );
}
