import { doc, onSnapshot,  collection,query, getDocs} from "firebase/firestore";
import TaskCreator from "../task-creator/task-creator";
import { db } from "../../firebase/firebase-config";
import {  useEffect, useState } from "react";

const TaskZone =  () =>{
    const [taskText, setTaskText] = useState([]);

    useEffect(()=>{
        getTask();
    }, [])

    const getTask = ()=>{
        const taskList = collection(db, "task");
        getDocs(taskList)
        .then(response =>{
            const task = response.docs.map(doc =>({
                data: doc.data(),
                id : doc.id,
            }))
            setTaskText(task);
        })
        .catch(error => console.log("impossible de lire la db"))
    }

    return(
        <div className="taskzone">
            {taskText.map((task)=>(
                <TaskCreator taskText={task.data.taskName} />
        ) )}
        </div>
    )
}

export default TaskZone;