import classes from "./HomeInfoLeft.module.css"
import { motion } from 'framer-motion'
import interiorImg from '../../assets/interior.jpg'



export default function InfoElementRight({data}){
    return (
            <motion.div 
                initial={{opacity:0, y: -300}} 
                animate={{opacity: 1, y: 0}} 
                transition={{delay: 0.5}} 
                className={classes.infoContent}
            >   
                <div className={classes.infoText}>
                    <p>{data.text}</p>  
                </div>
                <div className={classes.infoImgRight}>
                    <img src={data.img} alt='Interior with wood table'/>   
                </div>
            </motion.div>
    )

};