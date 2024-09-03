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
    
    const inputRef = useRef();
    const type = currentEditable[0];

    const saveHandler = ()=>{
        let newValue = inputRef.current.value;
        

        onEdit(type, newValue);
        onCloseEdit()
    }

    const submitHandler = (e)=>{
        
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const values = data.getAll(type);
        let userInputData = values

        if(values.length === 1){
            userInputData = values[0];
        };

        onEdit(type, userInputData);
        onCloseEdit()
    } 

    let currentInput = <EditInputEl name={type} currentEditable={currentEditable} refEl={inputRef} type={typeMapper[type]}/>

    if(type === 'additionalImgUrls'){
        currentInput = <>{currentEditable[1].map(()=> <EditInputEl name={type} currentEditable={currentEditable} refEl={inputRef} type='url'/>)}</>
    }

    //TODO Select Inputs and Text Area, Urls Fix
    return (
        <ModalComponent onClose={onCloseEdit}>
            <form onSubmit={submitHandler} className={classes.editForm}>
                {currentInput}
                <div>
                    <button type='submit' className='defaultBtn'>Save Change</button>
                    {/* <button onClick={saveHandler} className='defaultBtn'>Save Change</button> */}
                </div>
            </form>

        </ModalComponent>
    )
}