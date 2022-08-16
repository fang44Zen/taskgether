

const TaskCreator = ({taskText})=>{
    return(
        <div>
            <p>{taskText}</p>
            <button>modify</button>
            <button>delete</button>
        </div>
    )
}

export default TaskCreator;