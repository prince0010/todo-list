import { observer } from "mobx-react"
import Logo from '../logo.svg'
import { BaseText } from "./base-text"
import { ThemeToggle } from "../stores/theme-toggle"


export const AppContainer = observer(() => {
        return(
                <div className="max-w-screen-md mx-auto p-3">
                        <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                <img src={Logo} alt="logo" />
                                <div className="text-xl text-primary text-orange-300"> Todo </div>
                                </div>
                                <ThemeToggle></ThemeToggle>
                        </div>
                                <BaseText> Hello World </BaseText>
                </div>
        )
})