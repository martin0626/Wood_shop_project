import { useState } from 'react';
import classes from './OrderForm.module.css'
import OrderInput from './OrderInput';


function checkLen(str){
    return str.length > 2;
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

        console.log(data);
    }

    return (
        <form onSubmit={formHandler} className={classes.orderForm}>

            <OrderInput label={'First Name'} inputId={'firstName'} />
            <OrderInput label={'Last Name'} inputId={'lastName'} />
            <OrderInput label={'Email'} inputId={'email'} />
            <OrderInput label={'Address'} inputId={'address'} />
            <OrderInput label={'Phone Number'} inputId={'phone'} />
            <div className={classes.btnOrder}>
                <button className='defaultBtn'>Finish Order</button>
            </div>
        </form>
    )
}