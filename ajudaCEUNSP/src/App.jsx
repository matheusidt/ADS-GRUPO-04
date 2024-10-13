import React from "react";
import { Outlet } from "react-router-dom";
import AuthRedirect from "./utils/AuthRedirect";
const App = () => {
  AuthRedirect();
  return <Outlet></Outlet>;
};

export default App;
