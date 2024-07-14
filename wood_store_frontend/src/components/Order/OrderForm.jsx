import { useState } from 'react';
import classes from './OrderForm.module.css'
import OrderInput from './OrderInput';


const inputValidationMapper = {
    'firstName': [checkLen],
    'lastName': [checkLen],
    'email': [checkEmail],
    'address': [checkLen],
    'phone': [checkBulgarianPhoneNumber],

}

function checkLen(str){
    const minLen = 3;

    if(str.length < minLen){
        return `Length must be at least ${minLen} chars!`;
    };

    return false;
}

function checkEmail(str){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(str)){
        return 'Incorrect email address!'
    }

    return false;
}


function checkBulgarianPhoneNumber(str) {
    // Regular expression for Bulgarian phone number validation
    const phoneRegex = /^(0[1-9]\d{7}|08[7-9]\d{7})$/;
    if(!phoneRegex.test(str)){
        return 'Incorrect phone number!'
    }

    return false;
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
            'firstName': [],
            'lastName': [],
            'email': [],
            'address': [],
            'phone': [],
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
            <OrderInput defaultValue={orderData.firstName} placeHolder={'Ivan'} label={'First Name'} inputId={'firstName'} errText={errors['firstName']} />
            <OrderInput defaultValue={orderData.lastName} placeHolder={'Ivanov'} label={'Last Name'} inputId={'lastName'} errText={errors['lastName']} />
            <OrderInput defaultValue={orderData.email} placeHolder={'test@example.com'} label={'Email'} inputId={'email'} errText={errors['email']} />
            <OrderInput defaultValue={orderData.address}  placeHolder={'Mladost-4, bl.491'} label={'Address'} inputId={'address'} errText={errors['address']} />
            <OrderInput defaultValue={orderData.phone} placeHolder={'08X XXX XXXX'} label={'Phone Number'} inputId={'phone'} errText={errors['phone']} />

            <div className={classes.btnOrder}>
                <button className='defaultBtn'>Proceed</button>
            </div>
        </form>
    )
}