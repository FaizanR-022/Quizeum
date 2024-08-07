import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ChooseProgram from "../Pages/Quiz/FirstWindow/ChooseProgram";
import Steps from "../Pages/Quiz/FirstWindow/Steps";
import Quiz from "../Pages/Quiz/QuizWindow/Quiz";
import Loader from "../Global/Loader/Loader";
import QuizLoader from "../Global/Loader/QuizLoader";

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
