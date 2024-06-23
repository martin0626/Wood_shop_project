import { Outlet } from "react-router";
import MainNavigation from "../components/MainNav/MainNavigation";
import classes from "./RootPage.module.css"
import { useSelector } from "react-redux";
import CartComponent from "../components/Cart/Cart";
import { AnimatePresence } from "framer-motion";

export default function Root(){
    const isCartOpen = useSelector((state)=> state.ui.cartIsOpen)

    return (
    <>
        <MainNavigation/>
        <AnimatePresence>
            {isCartOpen && <CartComponent/>}
        </AnimatePresence>
        <section className={classes.mainSection}>
            <Outlet />
        </section>
    </>
    );
};