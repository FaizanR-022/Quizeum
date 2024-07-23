import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Home/Header";
import Footer from "./Pages/Home/Footer";
import { RouterProvider } from "react-router-dom";
import { Route } from "./Routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={Route} />
    </>
  );
}

export default App;
