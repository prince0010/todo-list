import { observer } from "mobx-react"
import Logo from '../assets/icon.png'
import { ThemeToggle } from "../stores/theme-toggle"
import { useStore } from "../stores"
import { useEffect } from "react"
import { TaskList } from "./task-list"
import { TaskInput } from "./task-input"


export const AppContainer = observer(() => {
        const store = useStore()

        useEffect(() => {
                document.body.setAttribute('data-mode', store.theme.themeMode )
        }, [store.theme.themeMode])

        return(
                <div className="max-w-screen-md mx-auto p-3">
                        <div className="flex items-center justify-between">
                                <div className="flex flex-col items-center">
                                <img src={Logo} alt="logo" className="w-[6rem]" />
                                <div className="text-l text-dark font-bold dark:text-addedc"> To-do Web</div>
                                </div>
                                <ThemeToggle></ThemeToggle>
                        </div>
                                <TaskInput></TaskInput>
                                <TaskList></TaskList>
                </div>
        )
})