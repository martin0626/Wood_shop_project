import classes from "./Filter.module.css"
import { motion } from 'framer-motion'


export default function Filter(){
    return (
            <motion.div 
                initial={{opacity:0}} 
                animate={{opacity: 1}}
                transition={{delay: 0.3}} 
                className={classes.filterElement}
            >   
                <ul className={classes.filterLinks}>
                    <li>Filter</li>
                    <li>Sort</li>
                </ul>
            </motion.div>
    )

};