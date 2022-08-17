import { useState } from 'react';
import './task-creator.css';

const TaskCreator = ({taskText, clickDelete, onCheck, styleText, clickAcceptMod})=>{
    const [isOnModifying, setOnModifying] = useState(false);

    const clickModify = () =>{
        setOnModifying(true)
    }

    const clickCancelMod = () =>{
        setOnModifying(false)
    }

    

    if(!isOnModifying){
        return(
        
            <div className="list-style" >
                <input type="checkbox" onClick={onCheck} />
                <p className={styleText}>{taskText}</p>
                <button onClick={clickModify}>modify</button>
                <button onClick={clickDelete}>delete</button>
            </div>
        )
    }else{
        return(
        <div className="list-style" >
            <input type="text" value={taskText} className='text-list-style'/>
            <button onClick={clickAcceptMod}>accept</button>
            <button onClick={clickCancelMod}>cancel</button>
        </div>
        )
}

}

export default TaskCreator;