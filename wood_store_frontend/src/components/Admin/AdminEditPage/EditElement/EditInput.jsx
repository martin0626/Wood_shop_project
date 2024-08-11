import { useState } from 'react';
import classes from './EditForm.module.css';


export default function EditInputEl({currentEditable, refEl, ...props}){
    const [isSelected, setIsSelected] = useState(false);

    console.log(currentEditable);
    

    return (
        <div className={classes.inputEl}>
            <label className={isSelected && classes.clicked} htmlFor={currentEditable[0]}>{currentEditable[0]}</label>
            <input ref={refEl}  onFocus={()=>setIsSelected(true)} onBlur={()=> setIsSelected(false)} id={currentEditable[0]} defaultValue={currentEditable[1]} {...props}/>
        </div>
    )
}