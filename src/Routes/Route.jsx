import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ChooseProgram from "../Pages/Quiz/FirstWindow/ChooseProgram";
import Steps from "../Pages/Quiz/FirstWindow/Steps";
import Quiz from "../Pages/Quiz/QuizWindow/Quiz";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/choose-program",
    element: <ChooseProgram />,
  },

  {
    path: "/details",
    element: <Steps />,
  },

  {
    path: "/quiz",
    element: <Quiz />,
  },
]);
