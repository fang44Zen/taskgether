import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../../firebase/firebase-config';
import './task-creator.css';
import 'animate.css';

const TaskCreator = ({taskText, clickDelete, styleText, getId, iconCheck, checkButton, buttonCheckStyle})=>{
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
        
            <div className="list-style"  >
                 <button className={`button-task-style ${buttonCheckStyle}`} onClick={checkButton}>
                    <span className="material-symbols-outlined">{iconCheck}</span>
                </button>
                <p className={styleText}>{taskText}</p>
                <button  className='button-task-style  edit-button-style' onClick={clickModify}>
                    <span className="material-symbols-outlined">edit</span>
                </button>
                <button  className='button-task-style delete-button-style' onClick={clickDelete}>
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        )
    }else{
        return(
        <div className="list-style" >
            
            <span className='anime-border animate__animated animate__jello animate__infinite material-symbols-outlined'>edit</span>
            <input type="text" onChange={readInput}  defaultValue={inputValue} onKeyDown={handleEnterKey} className='modify-input-style text-list-style'/>
            <button className='button-task-style' onClick={()=>clickAcceptMod(getId)}>
                <span className="material-symbols-outlined edit-button-style">check_small</span>
            </button>
            <button  className='button-task-style' onClick={clickCancelMod}>
                <span className="material-symbols-outlined delete-button-style">cancel</span>
            </button>
        </div>
        )
}

}

export default TaskCreator;