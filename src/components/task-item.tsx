import { useEffect, useRef, useState } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from 'react-icons/md'
import { TaskInterface } from '../interaces'
import { useStore } from '../stores'
import { BaseText } from "./base-text"

interface Props{
    task: TaskInterface
}
const DISSAPEAR_CLASS = 'scale-75 -mb-[calc(48px+12px)] opacity-0 z-0'
const DISSAPEAR_DELAY = 120
export const TaskItem = (props: Props) => {
 
    const store = useStore()

    const [isDone, setIsDone] = useState(props.task.isDone)
    const [isDissapear, setIsDissapear] = useState(true)
    
    const taskRef = useRef<HTMLDivElement>(null)
    const labelRef = useRef<HTMLDivElement>(null)


    // If the task is done it will automatically drop in the completed part with effects
    const toggleDone = () => {
        const transitionCallback = () => {
            setTimeout(() => {
                    dissapear(()  => {
                        store.task.toggleDone(props.task.id)
                    })
            }, DISSAPEAR_DELAY);

            labelRef.current?.removeEventListener('transitionend', transitionCallback, false)
        }
        labelRef.current?.addEventListener('transitionend', transitionCallback, false)
        setIsDone(!isDone)
    }

    const dissapear = (callback: Function) => {
        const transitionCallback = () => {
            callback()

            taskRef.current?.removeEventListener('transitionend', transitionCallback, false)
        }
        taskRef.current?.addEventListener('transitionend', transitionCallback, false)
        setIsDissapear(true)
    }

    //This is effect when there is taska added and deleted
        useEffect(() => {
            setTimeout(() => {
                setIsDissapear(false)
            }, DISSAPEAR_DELAY)
        }, [])
    return(
        <div
        ref={taskRef}
         className={`
         relative
        ease-in-out
        duration-200
            ${isDissapear ? DISSAPEAR_CLASS : `z-10` }
        `}>
     <div className='
     flex
     h-[48px]
     items-center
     px-3
     my-[12px]
     bg-component
     rounded-lg
     dark:bg-component-dark
     gap-3
     shadow-lg
     '>
        {/* if checkbox is clicked the task(which is unique is ID) the task will be moved below in completed(0) => completed(1) */}
        <button onClick={() => toggleDone()}>
            {
                //opposite of isDone if its not done or opposite of isDone (!isDone) then the checkbox will be in MdCheckBoxOutlineBlank
                //else if it isDone or being clicked then it will display the MdCheckBox or the box will be checked
                !isDone ? (
                <BaseText>
                <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
                </BaseText> ) : (
                <MdCheckBox className='text-dark dark:text-orange-300'></MdCheckBox>
)            }          
        </button>

        {/* This is for Crossing if the task is done */}
        <div className='truncate flex-1 cursor-pointer' onClick= {() => store.task.edit(props.task)}>
            <BaseText 
            innerref={labelRef}
            className={`
            px-3
            truncate 
            inline
            relative
            after:content-['']
            after:absolute
            after:left-0
            after:h-[2px]
            after:top-[calc(50%+2px)]
            after:bg-slash
            after:duration-300
            after:ease-in-out
            after:transition-width
            ${isDone ? 'after:w-full' : 'after:w-0'}
            `}>{props.task.title}</BaseText>
        </div>
        <button className='text-danger '
        // If Click the Delete icon it will remove the task
        onClick={() => dissapear( () => store.task.remove(props.task.id))}>
            <MdDelete></MdDelete>
        </button>
     </div>
     </div>
    )

}