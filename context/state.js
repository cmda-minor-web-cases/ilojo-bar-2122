import { createContext, useContext } from "react";
import { getAllStories } from "../pages/lib/api";

// Create Context object.
const AppContext = createContext();

// Export Provider.
export function AppProvider({ children }) {
  let sharedState = getAllStories();

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

// Export useContext Hook.
export function useAppContext() {
  return useContext(AppContext);
}
