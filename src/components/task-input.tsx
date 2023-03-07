import { observer } from "mobx-react"

export const TaskInput = observer(() => {
    return(
        <div className="p-3 bg-component dark:bg-component-dark flex items-center">
          <input type="text" name="" id="" placeholder="Add New Task" className="bg-transparent outline-8"/>
          
          <button>add</button>
        </div>
    )


})