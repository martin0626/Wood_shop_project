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
            <DetailsGellery mainImage={product.imageUrl} images={product.additionalImgUrls}/>
            <DetailsDescription product={product}/>
            <div className={classes.descriptionSection}>
                <h1>Description</h1>
                <div className={classes.descriptionText}>
                    <p>{product.description}</p>
                </div>
            </div>
        </motion.div>
    )
}