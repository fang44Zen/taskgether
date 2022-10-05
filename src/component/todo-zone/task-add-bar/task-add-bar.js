import {addDoc, collection} from "firebase/firestore"
import { useState } from "react";
import { db } from "../../../firebase/firebase-config";
import './task-add-bar.scss'

const TaskAddBar = () =>{
    const [input, setInput] = useState('');
    const [addButtonVisible, setAddButtonVisible] = useState(false);
    

    const readInput =(e) =>{
        
        const txt = e.target.value;
        setInput(txt)
        if(txt.length>=1){
            setAddButtonVisible(true);
        }else{
            setAddButtonVisible(false);
        }
    }

    const addTask = async ()=>{
        if(input.length>=1){
            
            await addDoc(collection(db, "tasks"),{
                taskName: input,
                isCompleted: false,
            });
            setInput('');
            setAddButtonVisible(false);
        }
    }

    const handleEnterKey = (e) =>{
        if(e.key === 'Enter'){
          addTask();
        }
    }

    return(
        
            <div className="add-bar-style">
                <div className="input-zone">
                    <input type="text"  onChange={readInput} value={input}  className='input-style ' onKeyDown={handleEnterKey}/>
                    
                </div> 
                <button onClick={addTask} className={addButtonVisible?"add-button-style":'add-button-disabled'}>
                    <span className="material-symbols-outlined icon-add-button">add_circle</span>
                </button> 
            </div>
            
     
    )
}

export default TaskAddBar;