import { useSelector } from 'react-redux';
import classes from './CheckoutMain.module.css'
import CheckOutItem from './CheckoutItem';
import { useNavigate } from 'react-router';


export default function CheckoutMain(){
    const cartItems = useSelector((state)=> state.cart.items);
    const cartPrice = useSelector((state)=> state.cart.totalPrice);
    const navigate = useNavigate();
    
    const handleProceed = ()=>{
        navigate('/order')
    }

    return (
        <section className={classes.checkoutContainer}>
            <h1 className={classes.title}>Check Out</h1>
            <p style={{fontSize:'1.5rem'}}>Total Price: <a style={{fontSize:'2rem', fontWeight:'bold'}}>{cartPrice}</a> BGN</p>

            <div className={classes.productsCO}>
                {cartItems.map(p=> <CheckOutItem product={p}/>)}
            </div>
            <div className={classes.actionCO}>
                <button onClick={handleProceed} className='defaultBtn'>Proceed</button>
            </div>
        </section>
    );
}