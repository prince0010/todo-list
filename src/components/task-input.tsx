import { observer } from "mobx-react"
import { useEffect, useRef, useState } from "react"
import { useStore } from "../stores"

export const TaskInput = observer(() => {
    const store = useStore()

        const [title, setTitle] = useState(store.task.taskEdit?.title)

        const inputRef = useRef<HTMLInputElement>(null)
    
        const submit = () =>{
            if(title){
                    if(store.task.taskEdit){
                        store.task.update(store.task.taskEdit.id, title)
                    }
            
            else{
                store.task.add(title)
                }
                    setTitle('')
        }
    }

        useEffect(() => {
            if(store.task.taskEdit){
                setTitle(store.task.taskEdit?.title)
                inputRef.current?.focus()
            }
        },[store.task.taskEdit]) 

    return(
        <div className="p-3
         bg-component
          dark:bg-component-dark 
          flex 
          items-center
          shadow-lg
          text-dark
        dark:text-light
           rounded-lg
           mt-7">
          <input 
            value= {title}
            onInput = {(e) => setTitle(e.currentTarget.value)}
            //Keyboard if tapped enter key in keyboard
            onKeyDown = {(e) => (e.key === 'Enter' ? submit() : '' )}
          type="text" name="" id="" placeholder="+ Add New Task" className="bg-transparent outline-0 flex-1 px-3"/>
          
          <button onClick={() => submit()} className = "bg-primary px-3 py-2 text-sm text-light rounded-lg">
            {
                store.task.taskEdit ? 'update' : 'add'
             }
          </button>
        </div>
    )


})