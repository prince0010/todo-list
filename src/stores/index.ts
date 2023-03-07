import { createContext , useContext} from "react";
import { Task } from "../components/task";
import { Theme } from "./theme";
  
const ctx = createContext({
    //Context of the things in this web app
    theme: new Theme(),
    task: new Task()
})

export const useStore = () => useContext(ctx);