import { NavLink } from "react-router-dom"
import styles from './MainNavigation.module.css'

export default function MainNavigation(){
    return(
        <nav className={styles.navigation}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='products'>Products</NavLink>
            <NavLink to='order'>Order</NavLink>
        </nav>
    )
};