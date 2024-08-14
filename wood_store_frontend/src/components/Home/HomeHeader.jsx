import classes from "./HomeHeader.module.css"
import { motion } from 'framer-motion'
import interiorImg from '../../assets/interior.jpg'
import exteriorImg from '../../assets/exterior.jpg'
import { useEffect, useState } from "react"



export default function HeaderHome(){
    const [visibleImage, setVisibleImage ] = useState(false);

    


    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleImage(prevState => !prevState);
        }, 5000); // 5000 milliseconds = 5 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
            <motion.div 
                initial={{opacity:0, y: -300}} 
                animate={{opacity: 1, y: 0}} 
                transition={{delay: 0.5}} 
                className={classes.sliderContent}
            >   
                    {
                        visibleImage ? 
                        <motion.div 
                            initial={{opacity:0, x: -300}} 
                            animate={{opacity: 1, x: 0}} 
                            transition={{delay: 0.5}}
                        className={classes.imageInterior}></motion.div> : 
                        <motion.div
                            initial={{opacity:0, x: -300}} 
                            animate={{opacity: 1, x: 0}} 
                            transition={{delay: 0.5}}
                        className={classes.imageExteriror}></motion.div>
                    }
                    <div className={classes.header}>
                        <div className={classes.innerDecor}>
                            <div className={classes.secondInnerDecor}>
                            </div>
                        </div>
                        
                        
                        <div className={classes.innerContent}>
                            <h1><span className={classes.fancyWord}>Wood</span> is the best material for <span className={classes.fancyWord}>interior</span> and <span className={classes.fancyWord}>exterior</span>.</h1>
                        </div>
                    </div>
                
                {/* <div className={classes.header}>
                    <h1>Wood is the best material for interior and exterior.</h1>  
                </div>
                
                <div className={classes.images}>
                    <img src={interiorImg} alt='Interior with wood table'/>   
                    <img src={exteriorImg} alt='Exterior with wood table'/>  
                </div> */}


            </motion.div>
    )

};