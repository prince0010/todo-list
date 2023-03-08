import { useState } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from 'react-icons/md'
import { TaskInterface } from '../interaces'
import { useStore } from '../stores'
import { BaseText } from "./base-text"

interface Props{
    task: TaskInterface
}

export const TaskItem = (props: Props) => {

    const store = useStore()

    const [isDone, setIsDone] = useState(props.task.isDone)
  
    return(
     <div className='
     flex
     h-[48px]
     items-center
     px-3
     my-[12px]
     bg-component
     rounded-lg
     dark:bg-component-dark
     gap-2
     shadow-lg
     '>
        <button onClick={() => setIsDone(!isDone)}>
            {
                //opposite of isDone if its not done or opposite of isDone (!isDone) then the checkbox will be in MdCheckBoxOutlineBlank
                //else if it isDone or being clicked then it will display the MdCheckBox or the box will be checked
                !isDone ? (
                <BaseText>
                <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
                </BaseText> ) : (
                <MdCheckBox className='text-primary'></MdCheckBox>
)            }          
        </button>
        <div className='truncate flex-1 cursor-pointer' onClick= {() => store.task.edit(props.task)}>
            <BaseText className="truncate dark:text-primary text-danger">{props.task.title}</BaseText>
        </div>
        <button className='text-danger '
        // If Click the Delete icon it will remove the task
        onClick={() => store.task.remove(props.task.id)}>
            <MdDelete></MdDelete>
        </button>
     </div>
    )

}