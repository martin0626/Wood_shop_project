import Filter from "./Filter"
import classes from "./Products.module.css"
import { motion } from 'framer-motion'
import SingleProductComponent from "./SingleProduct"


export default function ProductsComponent(){
    return (
            <motion.div 
                initial={{opacity:0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.5}} 
                className={classes.productsMain}
            >   
                <Filter/>
                <section className={classes.productsSection}>
                    <SingleProductComponent/>
                    <SingleProductComponent/>
                    <SingleProductComponent/>
                    <SingleProductComponent/>
                    <SingleProductComponent/>
                    <SingleProductComponent/>
                    <SingleProductComponent/>
                    <SingleProductComponent/>
                </section>
            </motion.div>
    )

};