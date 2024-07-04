import { useState } from 'react';
import classes from './OrderInput.module.css'

export default function OrderInput({inputId, label, errText}){

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
                {errText && <p className={classes.errMsg}>{errText}</p>}

            </div>
            <label className={selectedField == inputId && classes.clicked} for={inputId}>{label}</label>
            <input onBlur={handleBlur} onFocus={handleFocus} type="text" id={inputId} name={inputId} required />
        </div>
    )
}