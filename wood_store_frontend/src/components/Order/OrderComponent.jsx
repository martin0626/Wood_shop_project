import { useState } from 'react'
import classes from './OrderComponent.module.css'
import OrderForm from './OrderForm';
import OfficeSelection from './OrderOfficeSelection';
import { useSubmit } from 'react-router-dom';
import { useSelector } from 'react-redux';


const officeChoseView = 'OFFICEINFO';
const personalInfoView = 'PERSONALINFO';



export default function Order({citiesData}){

    const submit = useSubmit();
    const cartItems = useSelector((state)=> state.cart.items);
    const [ visibleSection, setVisibleSection ] = useState(personalInfoView);
    const [ orderData, setOrderData ] = useState(
        {
            first_name: "",
            last_name: "",
            email: "",
            address: "",
            phone: "",
            city: "",
            region: "",
        }
    )
    
    const formSubmitHandler = (data)=>{
        console.log(data);
        setOrderData(currData => {
            return {...data, city: currData.city, address: currData.addressDelivery};
        });

        handleChangeView(officeChoseView);
    };

    const handleChangeView = (view)=>{
        setVisibleSection(view);
    }

    const deliverySubmitHandler = (data) =>{
        // setOrderData(currData => {
        //     let newData = 
        //     submit(orderData, { method: 'post', action: '' })
        //     return {...currData, city: data.city, address: data.addressDelivery, region: data.region};
        // });


        let updatedData = {...orderData, 
            city: data.city, 
            address: data.addressDelivery, 
            region: data.region, 
            status: "PROCESSING",
            basket: cartItems,
        }
        submit(updatedData, { method: 'post', action: '' });
    };


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