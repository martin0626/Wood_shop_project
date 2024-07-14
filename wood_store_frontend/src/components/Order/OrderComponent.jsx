import { useState } from 'react'
import classes from './OrderComponent.module.css'
import OrderForm from './OrderForm';
import OfficeSelection from './OrderOfficeSelection';


const officeChoseView = 'OFFICEINFO';
const personalInfoView = 'PERSONALINFO';



export default function Order({citiesData}){

    const [ visibleSection, setVisibleSection ] = useState(personalInfoView);
    const [ orderData, setOrderData ] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phone: "",
            city: "",
            addressDelivery: ""
        }
    )
    
    const formSubmitHandler = (data)=>{
        console.log(data);
        setOrderData(currData => {
            return {...data, city: currData.city, addressDelivery: currData.addressDelivery};
        });

        handleChangeView(officeChoseView);
    };

    const handleChangeView = (view)=>{
        setVisibleSection(view);
    }

    const deliverySubmitHandler = (data) =>{
        setOrderData(currData => {
            return {...currData, city: data.city, addressDelivery: data.addressDelivery};
        });
    };

    console.log(orderData);

    return(
        <div className={classes.orderContainer}>
            <div className={classes.headerOrder}>
                <h1>Order</h1>
                <h3>Please add your personal information to finish order.</h3>
            </div>

            { visibleSection === 'OFFICEINFO'
                ?
                    <OfficeSelection handleChangeView={handleChangeView} onAddressSubmit={deliverySubmitHandler} citiesData={citiesData} />    
                :
                    <OrderForm orderData={orderData} onFormSubmit={formSubmitHandler}/>
            }
        </div>
    )
}