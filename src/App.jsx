import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./Pages/Home/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home" element={"This is urmi & Ahnaf"} />
      <Route path="/" element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
