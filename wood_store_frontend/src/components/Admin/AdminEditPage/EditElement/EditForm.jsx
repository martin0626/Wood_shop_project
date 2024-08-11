import { useRef, useState } from 'react';
import ModalComponent from '../../../UI/ModalComponent';
import classes from './EditForm.module.css';
import EditInputEl from './EditInput';




export default function EditFormEl({onCloseEdit, currentEditable, onEdit}){

    const typeMapper = {
        'price': 'number',
        'quantity': 'number',
        'weight': 'number',
        'width': 'number',
        'height': 'number',
        'imageUrl': 'url',
        'additionalImgUrls': 'url'
    }
    console.log(currentEditable);
    
    const inputRef = useRef();
    const type = currentEditable[0];

    const saveHandler = ()=>{
        let newValue = inputRef.current.value;
        

        onEdit(type, newValue);
        onCloseEdit()
    }

    let currentInput = <EditInputEl currentEditable={currentEditable} refEl={inputRef} type={typeMapper[type]}/>

    if(type === 'additionalImgUrls'){
        currentInput = <>{currentEditable[1].map(()=> <EditInputEl currentEditable={currentEditable} refEl={inputRef} type='url'/>)}</>
    }

    //TODO Select Inputs and Text Area, Urls Fix
    return (
        <ModalComponent onClose={onCloseEdit}>
            <div className={classes.editForm}>
                {currentInput}
                <div>
                    <button onClick={saveHandler} className='defaultBtn'>Save Change</button>
                </div>
            </div>

        </ModalComponent>
    )
}