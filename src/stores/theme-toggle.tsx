import { observer } from 'mobx-react'
import {IoIosSunny, IoIosMoon} from 'react-icons/io'

export const ThemeToggle = observer (() => {
    return(
        <button className='
        flex
        item-center
        gap-[3px]
        text-[18px]
        '>
                <IoIosMoon></IoIosMoon>
                <IoIosSunny></IoIosSunny>
        </button>
    )

})