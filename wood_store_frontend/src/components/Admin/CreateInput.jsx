import { useState } from 'react';
import classes from './CreateInput.module.css'


export default function CreateInput({placeHolder, inputId, label, errText, defaultValue, type='text', element='input'}){

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
            {
                element === 'input' 
                    ?
                <input defaultValue={defaultValue} placeholder={placeHolder} onBlur={handleBlur} onFocus={handleFocus} type={type} id={inputId} name={inputId} required />
                    :
                <textarea defaultValue={defaultValue} placeholder={placeHolder} onBlur={handleBlur} onFocus={handleFocus} rows='6'></textarea>
            }
        </div>
    )
}