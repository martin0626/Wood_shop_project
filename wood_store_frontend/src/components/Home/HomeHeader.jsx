import classes from "./HomeHeader.module.css"
import { motion } from 'framer-motion'
import interiorImg from '../../assets/interior.jpg'
import exteriorImg from '../../assets/exterior.jpg'



export default function HeaderHome(){
    return (
            <motion.div 
                initial={{opacity:0, y: -300}} 
                animate={{opacity: 1, y: 0}} 
                transition={{delay: 0.5}} 
                className={classes.sliderContent}
            >   
                <div className={classes.header}>
                    <h1>Wood is the best material for interior and exterior.</h1>  
                </div>
                
                <div className={classes.images}>
                    <img src={interiorImg} alt='Interior with wood table'/>   
                    <img src={exteriorImg} alt='Exterior with wood table'/>  
                </div>


            </motion.div>
    )

};