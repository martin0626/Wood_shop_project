import { useState } from 'react'
import classes from './OrderComponent.module.css'
import OrderForm from './OrderForm';
import OfficeSelection from './OrderOfficeSelection';


export default function Order({citiesData}){
    

    return(
        <div className={classes.orderContainer}>
            <div className={classes.headerOrder}>
                <h1>Order</h1>
                <h3>Please add your personal information to finish order.</h3>
            </div>
            <OrderForm/>
            <OfficeSelection citiesData={citiesData} />
        </div>
    )
}