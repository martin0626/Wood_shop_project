import { useState } from 'react'
import classes from './OrderComponent.module.css'
import OrderForm from './OrderForm';


export default function Order(){
    

    return(
        <div className={classes.orderContainer}>
            <div className={classes.headerOrder}>
                <h1>Order</h1>
                <h3>Please add your personal information to finish order.</h3>
            </div>
            <OrderForm/>
        </div>
    )
}