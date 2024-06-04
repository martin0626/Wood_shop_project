import { NavLink } from "react-router-dom"
import styles from './MainNavigation.module.css'
import { motion } from 'framer-motion'

export default function MainNavigation(){
    return(
        <motion.nav className={styles.navigation} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.3}}>
            <motion.ul className={styles.list}>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.active : undefined} end>Home</NavLink>
                <NavLink to='products' className={({isActive})=> isActive ? styles.active : undefined} end>Products</NavLink>
                <NavLink to='order' className={({isActive})=> isActive ? styles.active : undefined} end>Order</NavLink>
            </motion.ul>
        </motion.nav>
    )
};

