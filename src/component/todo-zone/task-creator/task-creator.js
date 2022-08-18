import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../../firebase/firebase-config';
import './task-creator.css';

const TaskCreator = ({taskText, clickDelete, onCheck, styleText, getId})=>{
    const [isOnModifying, setOnModifying] = useState(false);
    const [inputValue, setInputValue] = useState(taskText);

    const clickModify = () =>{
        setOnModifying(true)
    }

    const clickCancelMod = () =>{
        setOnModifying(false)
        setInputValue(taskText || "")
    }

    const readInput = (e) =>{
        const txt = e.target.value
        setInputValue(txt || "")
    }

    const clickAcceptMod = async (id) =>{
        if(inputValue.length>=1){
            const textTaskRef = doc(db, "tasks", id)
            await updateDoc(textTaskRef, {
                taskName: `${inputValue}` 
            });
            setOnModifying(false)
        }
    }

    const handleEnterKey = (e) =>{
        if(e.key === 'Enter'){
          clickAcceptMod(getId);
        }
    }

    if(!isOnModifying){
        return(
        
            <div className="list-style" >
                <input type="checkbox" onClick={onCheck} />
                <p className={styleText}>{taskText}</p>
                <button  className='button-task-style  edit-button-style' onClick={clickModify}>
                    <span class="material-symbols-outlined">edit</span>
                </button>
                <button  className='button-task-style delete-button-style' onClick={clickDelete}>
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        )
    }else{
        return(
        <div className="list-style" >
            <input type="text" onChange={readInput}  defaultValue={inputValue} onKeyDown={handleEnterKey} className='text-list-style'/>
            <button className='button-task-style' onClick={()=>clickAcceptMod(getId)}>accept</button>
            <button  className='button-task-style' onClick={clickCancelMod}>cancel</button>
        </div>
        )
}

}

export default TaskCreator;