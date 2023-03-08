import { observer } from "mobx-react"
import { useStore } from "../stores"
import { BaseText } from "./base-text"
import { TaskItem } from "./task-item"

export const TaskList = observer(() => {
    const store = useStore()

    return(
    //     <div className="w-full h-screen bg-orange-300 my-12 py-20">
    //         <div className="max-w-[1000px] mx-auto p-4 flex justify-center h-full w-full">

    // <p className="text-4xl font-bold text-black ">
    //     Test Program
    // </p>
    // </div>
    //         </div>
    <div className="mt-6">
        {
            store.task.tasks.map((task) => <TaskItem key={task.id} task ={task}></TaskItem>)
        }
            {/* <div className="py-3 dark:text-light"></div> */}
        <BaseText className="py-7 px-3">

            Completed ({store.task.completedTasks.length})
        </BaseText>
       { store.task.completedTasks.map((task) => <TaskItem key={task.id} task ={task}></TaskItem>)}
    </div>
    )

})