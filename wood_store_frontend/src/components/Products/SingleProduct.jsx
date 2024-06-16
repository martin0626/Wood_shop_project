import classes from "./SingleProduct.module.css"
import { motion } from 'framer-motion'
import productImage from '../../assets/interior.jpg'


export default function SingleProductComponent({name, price}){
    return (
            <motion.div 
                initial={{opacity:0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1}}
                className={classes.productContainer}
            >   
                <div className={classes.productImg}>
                    <img src={productImage} alt='Product image'/>
                </div>
                <div className={classes.cardDescription}>
                    <p className={classes.cardName}>{name}</p>
                    <p className={classes.cardPrice}>{price} BGN</p>
                </div>
            </motion.div>
    )
};