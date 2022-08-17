import './task-creator.css';

const TaskCreator = ({taskText, clickDelete, taskId})=>{
    return(
        <div className="list-style">
            <p>{taskText}</p>
            <button >modify</button>
            <button onClick={clickDelete}>delete</button>
        </div>
    )
}

export default TaskCreator;