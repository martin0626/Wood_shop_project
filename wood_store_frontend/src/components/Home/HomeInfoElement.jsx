import classes from "./HomeInfoElement.module.css"
import { motion } from 'framer-motion'
import interiorImg from '../../assets/interior.jpg'



export default function InfoElement(){
    return (
            <motion.div 
                initial={{opacity:0, y: -300}} 
                animate={{opacity: 1, y: 0}} 
                transition={{delay: 0.5}} 
                className={classes.infoContent}
            >   
                <div className={classes.infoText}>
                    <h1>Wood is the best material for interior and exterior.</h1>  
                </div>
                
                <div className={classes.infoImg}>
                    <img src={interiorImg} alt='Interior with wood table'/>   
                </div>


            </motion.div>
    )

};