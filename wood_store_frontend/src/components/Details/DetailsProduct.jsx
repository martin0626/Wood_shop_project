import classes from './DetailsProduct.module.css'

import { motion } from 'framer-motion'
import DetailsGellery from './DetailsGallery'
import DetailsDescription from './DetailsDescription'
import { useEffect, useRef } from 'react'




export default function DetailsProduct({product}){
    const topElement = useRef()

    useEffect(()=>{
        topElement.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <motion.div 
            ref={topElement}
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