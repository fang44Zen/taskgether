import TaskAddBar from "./task-add-bar/task-add-bar"
import TaskZone from "./task-zone/task-zone"


const TodoZone = () =>{
    return(
        <div>
            <TaskAddBar />
            <TaskZone />
        </div>
    )
}

export default TodoZone;