import { observer } from 'mobx-react'
import {IoIosSunny, IoIosMoon} from 'react-icons/io'
import { useStore } from '../stores'

// AFTER_LIGHT_CLASS IS THE MAIN BALL IN THIS BUTTON PART WHERE IT WILL MOVE TO RIGHT FOR THE AFTER_DARK_CLASS -24px and if
//  clicked again it will go back to the AFTER_LIGHT_CLASS 3px (3px to 24px is the range or distance of left to right movement slide) and so on 
const AFTER_LIGHT_CLASS ='after:left-[3px]' 
const AFTER_DARK_CLASS = 'after:left-[24px]'

export const ThemeToggle = observer (() => {
    const store = useStore()

    return (
        <button 
        onClick={() => store.theme.toggle()}
        className={ `
        flex
        item-center
        gap-[3px]
        text-[18px]
        bg-dark
        text-sun
        dark:text-dark
        dark:bg-addedc
        p-[3px]
        relative
        rounded-full
        after:absolute
        after:bg-light
        after:h-[18px]
        after:w-[18px]
        after:rounded-full
        after:ease-in-out
        after:duration-300
        ${store.theme.mode(AFTER_LIGHT_CLASS, AFTER_DARK_CLASS)}
   `}
    >
                <IoIosMoon></IoIosMoon>
            <IoIosSunny></IoIosSunny>
        </button>
    )

})