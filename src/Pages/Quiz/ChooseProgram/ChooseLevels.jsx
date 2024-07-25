import ProgramsBox from "../../../Components/ProgramsBox";
import Divider from "../../../Global/Divider";
import { ModuleHeading, ProgramContainer } from "../../../Global/styled";

export default function ChooseLevels() {
  const levels = [
    {
      Title: "EASY",
    },
    {
      Title: "MEDIUM",
    },
    {
      Title: "HARD",
    },
  ];

  return (
    <>
      <ModuleHeading>Select a Level</ModuleHeading>
      <Divider />
      <ProgramContainer>
        {levels.map((level) => {
          return <ProgramsBox {...level} homePage={false} />;
        })}
      </ProgramContainer>
    </>
  );
}
