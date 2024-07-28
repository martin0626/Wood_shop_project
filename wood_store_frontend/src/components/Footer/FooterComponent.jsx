import { useEffect, useRef } from 'react'
import classes from './FooterComponent.module.css'
import FooterContacts from './FooterContacts'
import FooterNav from './FooterMap'
import Subscribe from './FooterSubscribe'
import { motion, useAnimation, useInView } from 'framer-motion'


export default function FooterComp(){

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
        className={classes.footerContainer}
        ref={ref}
        variants={{
            hidden: {opacity: 0, x: "100%"},
            visible: {opacity: 1, x: 0}
            }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.1}} 
        >
            <FooterContacts/>
            <FooterNav/>
            <Subscribe/>
        </motion.div>
    )
}