import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { RouterProvider } from "react-router-dom";
import { Route } from "./Routes/Route";

function App() {
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={Route} />
    </>
  );
}

export default App;
