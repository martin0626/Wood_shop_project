import { useRef, useState } from 'react';
import ModalComponent from '../../UI/ModalComponent';
import classes from './EditForm.module.css';


export default function EditFormEl({onCloseEdit, currentEditable, onEdit}){

    const [isSelected, setIsSelected] = useState(false);
    const inputRef = useRef();

    const saveHandler = ()=>{

        let newValue = inputRef.current.value;
        

        onEdit(currentEditable[0], newValue);
        onCloseEdit()
    }

    return (
        <ModalComponent onClose={onCloseEdit}>
            <div className={classes.editForm}>
                <div className={classes.inputEl}>
                    <label className={isSelected && classes.clicked} htmlFor={currentEditable[0]}>{currentEditable[0]}</label>
                    <input ref={inputRef} onFocus={()=>setIsSelected(true)} onBlur={()=> setIsSelected(false)} id={currentEditable[0]} defaultValue={currentEditable[1]}/>
                </div>
                <div>
                    <button onClick={saveHandler} className='defaultBtn'>Save Change</button>
                </div>
            </div>

        </ModalComponent>
    )
}