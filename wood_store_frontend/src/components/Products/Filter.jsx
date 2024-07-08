import { useState } from "react"
import classes from "./Filter.module.css"
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux";
import { loadAllProducts, loadPriceAscProducts, loadPriceDescProducts } from "../../store/products-actions";
import { uiActions } from "../../store/ui-slice";



export default function Filter({onOpen}){
    const [isOpenSort, setisOpenSort] = useState(false);
    const dispatch = useDispatch();

    const setLoadingUi = ()=>{
        dispatch(uiActions.setLoading());
        let timer = setTimeout(()=>{
            dispatch(uiActions.setLoaded());
        }, 500);

        return ()=> clearTimeout(timer)
    }

    const showSortHandler = ()=>{
        setisOpenSort(!isOpenSort);
    }

    const handlePriceAscSort = ()=>{
        dispatch(loadPriceAscProducts());
        setLoadingUi()
    };

    const handlePriceDescSort = ()=>{
        dispatch(loadPriceDescProducts());
        setLoadingUi()
    };

    const handleClearSort = ()=>{
        dispatch(loadAllProducts());
        setLoadingUi()
    };
    

    return (
            <motion.div 
                initial={{opacity:0}} 
                animate={{opacity: 1}}
                transition={{delay: 0.3}} 
                className={classes.filterElement}
            >   
                <ul className={classes.filterLinks}>
                    <li className={classes.filterBtns} onClick={onOpen}>Filter<i className="material-icons">filter_list</i></li>
                    <div className={`${classes.sortSec}`}>
                        <motion.li 
                            onClick={showSortHandler}
                            layout
                            initial={{ opacity: 1 }}
                            animate={{ x: isOpenSort ? 0 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={classes.filterBtns}
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
                                transition={{ duration: 0.3 }}
                            >
                                <p className={classes.filterBtns} onClick={handlePriceAscSort}>Price Asc.</p>
                                <p className={classes.filterBtns} onClick={handlePriceDescSort}>Price Desc.</p>
                                <p className={classes.filterBtns} onClick={handleClearSort}>Clear</p>

                            </motion.div>
                        }  
                    </div>
                </ul>
            </motion.div>
    )

};