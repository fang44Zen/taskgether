import {doc, setDoc} from "firebase/firestore"
import { useState } from "react";
import { db } from "../../firebase/firebase-config";


const TaskAddBar = () =>{
    const [input, setInput] = useState('');
    const [task, setTask] = useState([]);
    const [taskNumber, setTaskNumber] = useState(0);

    const readInput =(e) =>{
        const txt = e.target.value;
        setInput(txt)
    }

    const addTask = async ()=>{
        setTaskNumber(taskNumber+1);
        const newTask = {
            id: {taskNumber},
            taskName: {input},
            isCompleted: false,
         }
        setTask([...task, newTask]);
        setInput('');
        
        await setDoc(doc(db, "task", `task: ${taskNumber}`),newTask);
    }

    const handleEnterKey = (e) =>{
        if(e.key === 'Enter'){
          addTask();
        }
    }

    return(
        <div className="input-zone">
            <input type="text"  onChange={readInput} value={input}  onKeyDown={handleEnterKey}/>
            <button onClick={addTask}>Add</button> 
        </div>
    )
}

export default TaskAddBar;