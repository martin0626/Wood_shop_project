import classes from './DetailsProduct.module.css'

import { motion } from 'framer-motion'
import DetailsGellery from './DetailsGallery'
import DetailsDescription from './DetailsDescription'



export default function DetailsProduct({product}){
    return (
        <motion.div 
            className={classes.mainDetailElement}
            initial={{opacity:0}} 
            animate={{opacity: 1}} 
            transition={{delay: 0.5}}
        >
            <DetailsGellery/>
            <DetailsDescription product={product}/>
        </motion.div>
    )
}