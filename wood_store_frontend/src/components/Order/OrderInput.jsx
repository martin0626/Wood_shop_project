import { useState } from 'react';
import classes from './OrderInput.module.css'

export default function OrderInput({placeHolder, inputId, label, errText, defaultValue}){

    const [selectedField, setSelectedField] = useState('');


    const handleFocus = ()=>{
        setSelectedField(inputId);
    }

    const handleBlur = ()=>{
        setSelectedField('');
    }

    return (
        <div className={classes.inputOrder}>
            <div className={classes.errorDiv}>
                {errText.length > 0 && <p className={classes.errMsg}>{errText}</p>}

            </div>
            <label className={selectedField == inputId && classes.clicked} htmlFor={inputId}>{label}</label>
            <input defaultValue={defaultValue} placeholder={placeHolder} onBlur={handleBlur} onFocus={handleFocus} type="text" id={inputId} name={inputId} required />
        </div>
    )
}