import {addDoc, collection} from "firebase/firestore"
import { useState } from "react";
import { db } from "../../firebase/firebase-config";
import './task-add-bar.css'

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
        // <div className="add-bar-style">
            
            <div className="input-zone">
                <input type="text"  onChange={readInput} value={input}  className='input-style' onKeyDown={handleEnterKey}/>
                <button onClick={addTask} className='add-button-style'>Add</button> 
            </div> 
            
            
     //</div> 
    )
}

export default TaskAddBar;