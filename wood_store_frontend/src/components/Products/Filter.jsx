import { useState } from "react"
import classes from "./Filter.module.css"
import { motion } from 'framer-motion'


export default function Filter({onOpen}){
    const [isOpenSort, setisOpenSort] = useState(false);

    const showSortHandler = ()=>{
        setisOpenSort(!isOpenSort);
    }
    

    return (
            <motion.div 
                initial={{opacity:0}} 
                animate={{opacity: 1}}
                transition={{delay: 0.3}} 
                className={classes.filterElement}
            >   
                <ul className={classes.filterLinks}>
                    <li onClick={onOpen}>Filter<i class="material-icons">filter_list</i></li>
                    <div className={`${classes.sortSec}`}>
                        <motion.li 
                            onClick={showSortHandler}
                            layout
                            initial={{ opacity: 1 }}
                            animate={{ x: isOpenSort ? 0 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Sort{isOpenSort ? <i className="material-icons">first_page</i> : <i className="material-icons">chevron_right</i>}
                        </motion.li>
                        
                        {
                            isOpenSort
                             && 
                             <motion.div
                                className={classes.sortOptions}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p>Price</p>
                                <p>Material</p>
                                <p>Size</p>
                            </motion.div>
                        }  
                    </div>
                </ul>
            </motion.div>
    )

};