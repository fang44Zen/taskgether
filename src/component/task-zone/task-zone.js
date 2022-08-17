import { doc, onSnapshot,  collection, deleteDoc} from "firebase/firestore";
import TaskCreator from "../task-creator/task-creator";
import { db } from "../../firebase/firebase-config";
import {  useEffect, useState } from "react";

const TaskZone =  () =>{
    const [taskText, setTaskText] = useState([]);

    useEffect(()=>
        onSnapshot(collection(db, "tasks"), (snapshot) =>
            setTaskText(snapshot.docs.map((doc) => ({
                id: doc.id,
                task: doc.data(),
            })))
        ), []);

    return(
        <div className="taskzone">
            
            {taskText.map((task)=>(
                <li key={task.id}>
                    <TaskCreator taskText={task.task.taskName} clickDelete={ () => deleteDoc(doc(db, "tasks", task.id))}/>
               </li>
        ) )}
        
        </div>
    )
}

export default TaskZone;