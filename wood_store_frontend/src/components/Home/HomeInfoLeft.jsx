import { useEffect, useRef } from "react"
import classes from "./HomeInfo.module.css"
import { motion, useAnimation, useInView } from 'framer-motion'



export default function InfoElementLeft({data}){

    const ref = useRef(null);
    const inView = useInView(ref, {once: false});
    const mainControls = useAnimation()

    useEffect(()=>{
        if(inView){
            mainControls.start('visible')
        }else{
            mainControls.start('hidden')
        }
    }, [inView])

    return (
            <motion.div 
                variants={{
                    hidden: {opacity: 0, x: 750},
                    visible: {opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.1, delay: 0.1}} 
                className={classes.infoContent}
                ref={ref}
            >   
                <div className={classes.infoImgLeft}>
                    <img src={data.img} alt='Interior with wood table'/>   
                </div>
                <div className={classes.infoText}>
                    <p>{data.text}</p>  
                </div>
            </motion.div>
    )

};