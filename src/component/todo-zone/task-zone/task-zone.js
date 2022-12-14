import { doc, onSnapshot,  collection, deleteDoc, updateDoc} from "firebase/firestore";
import TaskCreator from "../task-creator/task-creator";
import { db } from "../../../firebase/firebase-config";
import {  useEffect, useState } from "react";
import '../task-creator/task-creator.css';
import './task-zone.css';
import './../task-creator/task-creator.css';

const TaskZone =  () =>{
    const [taskText, setTaskText] = useState([]);

    useEffect(()=>
        onSnapshot(collection(db, "tasks"), (snapshot) =>
            setTaskText(snapshot.docs.map((doc) => ({
                id: doc.id,
                task: doc.data(),
            })))
        ), []);
    
    const setCheck=  async (id)=>{
        const docRef = doc(db, "tasks", id);
        const filteredTask = taskText.find(task => task.id === id)
       
            if(filteredTask.task.isCompleted === false){
                await updateDoc(docRef, {
                    isCompleted: true
                });
            }else{
                await updateDoc(docRef, {
                    isCompleted: false
                });
            }
    }

    const delTask =async (id)=>{
        await deleteDoc(doc(db, "tasks", id))
    }
    
    return(
        <div className="taskzone">
            
            {taskText.map((task)=>(
                <div key={task.id}>
                <TaskCreator 
                    taskText={task.task.taskName} 
                    styleText={task.task.isCompleted ? 'task-done text-list-style': 'text-list-style'}
                    iconCheck={task.task.isCompleted?'check_circle':'radio_button_unchecked'}
                    buttonCheckStyle={task.task.isCompleted?'check-button-checked':'check-button-unchecked'}
                    clickDelete={() => delTask(task.id)}
                    checkButton={() => setCheck(task.id)}
                    getId={task.id}/>
               </div>
               ) )}
        
        </div>
    )
}

export default TaskZone;