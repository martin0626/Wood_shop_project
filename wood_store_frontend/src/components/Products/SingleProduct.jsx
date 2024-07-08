import classes from "./SingleProduct.module.css"
import { motion } from 'framer-motion'
import productImage from '../../assets/interior.jpg'

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

export default function SingleProductComponent({product}){
    const [ hoverEl, setHoverEl ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function detailsHandler(){
        navigate('/products/' + product.id);
    };

    const handleHover = ()=>{
        setHoverEl(true);
    };

    const handleRemoveHover = ()=>{
        setHoverEl(false);
    };

    const handleAddTocart = ()=>{
        dispatch(cartActions.additemToCart({...product, userQuantity: 1}))
        dispatch(uiActions.setGreenNotification({message: `Product: "${product.name}", was added to your cart.`, header: 'Success!' }))
    };

    return (
            <motion.div 
                initial={{opacity:0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.2}}
                className={classes.productContainer}  
                onMouseEnter={handleHover}
                onMouseLeave={handleRemoveHover}
            >   
                <div className={classes.productImg} > 
                    <img onClick={detailsHandler} src={product.image ? product.image : productImage} alt='Product image'/>
                    <div className={hoverEl ? `${classes.singlePrActions} ${classes.singleAcVisible}` : classes.singlePrActions}>
                        <p onClick={detailsHandler}><span class="material-symbols-outlined">visibility</span></p>
                        <p onClick={handleAddTocart}><span class="material-symbols-outlined">add_shopping_cart</span></p>
                    </div>
                </div>
                <div onClick={detailsHandler} className={hoverEl ? `${classes.cardDescription} ${classes.cardDescriptionSelected}` : classes.cardDescription}> 
                    <p className={classes.cardName}>{product.name}</p>
                    <p className={classes.cardPrice}>{product.price} BGN</p>
                    <div className={hoverEl ? classes.showContent : classes.hiddenContent}>
                        <p >Size: {product.width} X {product.height}</p>
                        <p >Weight: {product.weight}KG</p>
                    </div>
                </div>                    
            </motion.div>
    )
};