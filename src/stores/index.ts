import { createContext , useContext} from "react";
import { Theme } from "./theme";
  
const ctx = createContext({
    theme: new Theme()
})

export const useStore = () => useContext(ctx);