import { useState } from 'react';
import classes from './OrderForm.module.css'
import OrderInput from './OrderInput';


function checkLen(str){
    if(str.length > 2){
        return 'Length must be at least 2 chars!';
    }
    return false;
}





const inputValidationMapper = {
    'firstName': [checkLen],
    'lastName': [checkLen],
    'email': [checkLen],
    'address': [checkLen],
    'phone': [checkLen],

}

export default function OrderForm(){

    const [ errors, setErrors ] = useState(
        {
            'firstName:': '',
            'lastName': '',
            'email': '',
            'address': '',
            'phone': '',
        }
    );
    
    const formHandler = (e)=>{
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());

        // let newErrors = {}
        
        // Object.keys(data).forEach(key => {

        // })

        console.log(data);
    }

    return (
        <form onSubmit={formHandler} className={classes.orderForm}>
            <OrderInput label={'First Name'} inputId={'firstName'} errText={errors['firstName']} />
            <OrderInput label={'Last Name'} inputId={'lastName'} errText={errors['lastName']} />
            <OrderInput label={'Email'} inputId={'email'} errText={errors['email']} />
            <OrderInput label={'Address'} inputId={'address'} errText={errors['address']} />
            <OrderInput label={'Phone Number'} inputId={'phone'} errText={errors['phone']} />
            <div className={classes.btnOrder}>
                <button className='defaultBtn'>Finish Order</button>
            </div>
        </form>
    )
}