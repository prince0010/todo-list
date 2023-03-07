import { MdCheckBoxOutlineBlank, MdDelete } from 'react-icons/md'
import { BaseText } from "./base-text"


export const TaskItem = () => {
    return(
     <div className='
     flex
     h-[48px]
     items-center
     px-3
     bg-component
     rounded-lg
     dark:bg-component-dark
     gap-2
     shadow-lg
     '>
        <button>
            <BaseText>
            <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
            </BaseText>
        </button>
        <div className='truncate flex-1'>
            <BaseText className="truncate dark:text-primary text-danger">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia laboriosam enim amet ex id quam cumque quis, provident velit alias, 
            quibusdam necessitatibus, accusamus maxime et architecto libero delectus eum!
            </BaseText>
        </div>
        <button className='text-danger'>
            <MdDelete></MdDelete>
        </button>
     </div>
    )

}