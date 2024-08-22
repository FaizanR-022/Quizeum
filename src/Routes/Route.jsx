import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ChooseProgram from "../Pages/Quiz/FirstWindow/Screens/ChooseProgram";
import Steps from "../Pages/Quiz/FirstWindow/Steps";
import Quiz from "../Pages/Quiz/QuizWindow/Main/Quiz";
import Loader from "../Global/Loader/Loader";
import QuizLoader from "../Global/Loader/QuizLoader";
import Results from "../Pages/Quiz/QuizWindow/Result/Results";
import Answers from "../Pages/Quiz/QuizWindow/Answers/Answers";
import Header from "../Pages/Home/Header-Footer/Header";
import QuizHeader from "../Pages/Quiz/Header-Footer/Header";

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
    element: (
      <>
        {/* <Header /> */}
        {/* <QuizHeader /> */}
        <Steps />
      </>
    ),
  },

  {
    path: "/quiz",
    element: (
      <>
        {/* <Header /> */}
        <Quiz />
      </>
    ),
  },
  {
    path: "/results",
    element: (
      <>
        <Results />
      </>
    ),
  },
  {
    path: "/answers",
    element: <Answers />,
  },
]);
