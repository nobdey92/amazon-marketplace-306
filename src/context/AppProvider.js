import { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {}, () => {
    const basket = getFromLocalStorage("basket");
    const wishList = getFromLocalStorage("wishList");

    return {
      basket,
      wishList,
      total: 0,
    };
  });

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
