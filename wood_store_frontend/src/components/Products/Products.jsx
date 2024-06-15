import Filter from "./Filter"
import classes from "./Products.module.css"
import { AnimatePresence, motion } from 'framer-motion'
import SingleProductComponent from "./SingleProduct"
import { useState } from "react"
import AddFilterComponent from "./AddFilter"


export default function ProductsComponent(){
    const [isOpenCreateFilter, setIsOpenCreateFilter] = useState(false);

    const handelOpenNewFilter = ()=>{
        setIsOpenCreateFilter(true);
    }

    const handleCloseNewFilter = ()=>{
        setIsOpenCreateFilter(false);
    }


    return (
            <motion.div 
                initial={{opacity:0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.5}} 
                className={classes.productsMain}
            >   

                <AnimatePresence>
                    {isOpenCreateFilter && <AddFilterComponent onClose={handleCloseNewFilter}/>}
                </AnimatePresence>
                <Filter onOpen={handelOpenNewFilter}/>
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