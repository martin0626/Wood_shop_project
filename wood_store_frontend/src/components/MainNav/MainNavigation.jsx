import { NavLink } from "react-router-dom"
import classes from './MainNavigation.module.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"

export default function MainNavigation(){

    const cartQuantity = useSelector((state)=> state.cart.totalQuantity)
    const dispatch = useDispatch();


    const handleOpenCart = ()=>{
        dispatch(uiActions.openCart())
    }


    return(
        <motion.nav className={classes.navigation} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.3}}>
            <motion.ul className={classes.list}>
                <NavLink to='/' className={({ isActive }) => isActive ? classes.active : undefined} end>Home</NavLink>
                <NavLink to='products' className={({isActive})=> isActive ? classes.active : undefined} end>Products</NavLink>
                <div className={classes.cartItem}>
                    <a onClick={handleOpenCart} >Cart</a>
                    <a className={classes.cartNum}>{cartQuantity}</a>
                </div>
            </motion.ul>
        </motion.nav>
    )
};

