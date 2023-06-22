import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { WishList } from "./pages/WishList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wish-list" element={<WishList />} />
    </Routes>
  );
};
