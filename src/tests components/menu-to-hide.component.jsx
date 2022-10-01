import { useState } from "react";

const MenuToHide = () =>{
    const [isHidden, setIsHidden] = useState(true);
    const [text, setText] = useState('');
    const [statusList, setStatusList] = useState([]);


    const toggleHideButton = () =>{
        isHidden?setIsHidden(false):setIsHidden(true);
        
    }

    const onChangeInput = (e) =>{
        const valueText = e.target.value;
        setText(valueText);
    }

    const addButtonStatus = () =>{
        setStatusList([...statusList, text]);
        setText('');
    }
    const deleteButton = (i) =>{
        const actualList = [...statusList];
        actualList.splice(i, 1);
        setStatusList(actualList);
    }

    return(
        <div>
            {isHidden?
                <div>
                    <button onClick={toggleHideButton}>hide</button>
                    <ul>
                        <li>element 1</li>
                        <li>element 2</li>
                        <li>element 3</li>
                        <li>element 4</li>
                    </ul>
                </div>:
                <button  onClick={toggleHideButton}>show</button>
            }
            <input type="text" value={text} onChange={onChangeInput}/>
            <button onClick={addButtonStatus}>Add</button>
            
            {statusList.map((elem, i) =>(
                    <div key={i}>
                        <p>{elem}</p><button onClick={() => deleteButton(i)}>x</button>
                    </div>
                ))}
            
        </div>
    )
}

export default MenuToHide;