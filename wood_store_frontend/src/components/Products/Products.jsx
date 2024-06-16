import Filter from "./Filter"
import classes from "./Products.module.css"
import { AnimatePresence, motion } from 'framer-motion'
import SingleProductComponent from "./SingleProduct"
import { useState } from "react"
import AddFilterComponent from "./AddFilter"
import { useLoaderData } from "react-router"


export default function ProductsComponent(){
    const [isOpenCreateFilter, setIsOpenCreateFilter] = useState(false);
    const products = useLoaderData();

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
                    {
                        products.map(product => <SingleProductComponent key={product.id} name={product.name} price={product.price}/>)
                    }
                </section>
            </motion.div>
    )

};