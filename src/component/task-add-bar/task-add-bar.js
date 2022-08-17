import {addDoc, collection} from "firebase/firestore"
import { useState } from "react";
import { db } from "../../firebase/firebase-config";


const TaskAddBar = () =>{
    const [input, setInput] = useState('');
    
    

    const readInput =(e) =>{
        const txt = e.target.value;
        setInput(txt)
    }

    const addTask = async ()=>{
        const docRef = await addDoc(collection(db, "tasks"),{
            taskName: input,
            isCompleted: false,
        });
        setInput('');
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