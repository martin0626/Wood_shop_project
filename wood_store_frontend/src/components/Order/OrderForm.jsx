import { useState } from 'react';
import classes from './OrderForm.module.css'
import OrderInput from './OrderInput';
import { checkBulgarianPhoneNumber, checkEmail, checkLen } from '../../utils/InputCheckers';


const inputValidationMapper = {
    'first_name': [checkLen],
    'last_name': [checkLen],
    'email': [checkEmail],
    'address': [checkLen],
    'phone_number': [checkBulgarianPhoneNumber],
}




const checkFormInput = (data, orderData)=>{
    let newErrors = {}
        
    Object.keys(data).forEach(key => {
        let input = data[key];
        let validatons = inputValidationMapper[key];
        let currentErrors = [];

        validatons.forEach(vFunc=>{
            let result = vFunc(input);
            if(result){
                currentErrors.push(result);
            }
        })

        newErrors[key] = currentErrors;
    })

    return newErrors;
}


const hasErrors = (errsObj)=>{

    let hasErr = false;

    Object.keys(errsObj).forEach(k=>{
        if(errsObj[k].length > 0){
            hasErr = true;
        }
    })

    return hasErr;
}



export default function OrderForm({ onFormSubmit, orderData }){

    const [ errors, setErrors ] = useState(
        {
            'first_name': [],
            'last_name': [],
            'email': [],
            'address': [],
            'phone_number': [],
        }
    );
    
    const formHandler = (e)=>{
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());

        const errors = checkFormInput(data);

        setErrors(errors);

        if(!hasErrors(errors)){
            onFormSubmit(data);
        }
    }

    return (
        <form onSubmit={formHandler} className={classes.orderForm}>
            <OrderInput defaultValue={orderData.first_name} placeHolder={'Ivan'} label={'First Name'} inputId={'first_name'} errText={errors['first_name']} />
            <OrderInput defaultValue={orderData.last_name} placeHolder={'Ivanov'} label={'Last Name'} inputId={'last_name'} errText={errors['last_name']} />
            <OrderInput defaultValue={orderData.email} placeHolder={'test@example.com'} label={'Email'} inputId={'email'} errText={errors['email']} />
            <OrderInput defaultValue={orderData.phone_number} placeHolder={'08X XXX XXXX'} label={'Phone Number'} inputId={'phone_number'} errText={errors['phone_number']} />

            <div className={classes.btnOrder}>
                <button className='defaultBtn'>Proceed</button>
            </div>
        </form>
    )
}