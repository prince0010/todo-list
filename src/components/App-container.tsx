import { observer } from "mobx-react"
import Logo from '../logo.svg'
import { BaseText } from "./base-text"
import { ThemeToggle } from "../stores/theme-toggle"
import { useStore } from "../stores"
import { useEffect } from "react"


export const AppContainer = observer(() => {
        const store = useStore()

        useEffect(() => {
                document.body.setAttribute('data-mode', store.theme.themeMode )
        }, [store.theme.themeMode])

        return(
                <div className="max-w-screen-md mx-auto p-3">
                        <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                <img src={Logo} alt="logo" />
                                <div className="text-xl text-primary"> Todo </div>
                                </div>
                                <ThemeToggle></ThemeToggle>
                        </div>
                                <BaseText> Hello World </BaseText>
                </div>
        )
})