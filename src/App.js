import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
};
