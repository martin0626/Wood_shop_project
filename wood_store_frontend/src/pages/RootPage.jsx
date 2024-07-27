import { Outlet } from "react-router";
import MainNavigation from "../components/MainNav/MainNavigation";
import classes from "./RootPage.module.css"
import { useSelector } from "react-redux";
import CartComponent from "../components/Cart/Cart";
import { AnimatePresence } from "framer-motion";
import Notification from "../components/UI/NotificationComp";
import { getCartOnLoad } from "../store/cart-actions";
import FooterComp from "../components/Footer/FooterComponent";

export default function Root(){
    const isCartOpen = useSelector((state)=> state.ui.cartIsOpen)
    const hasNotification = useSelector(state => state.ui.hasNotification);
    getCartOnLoad();

    return (
    <>
        {hasNotification &&  <Notification/>}
        <MainNavigation/>
        <AnimatePresence>
            {isCartOpen && <CartComponent/>}
        </AnimatePresence>
        <section className={classes.mainSection}>
            <Outlet />
        </section>
        <FooterComp/>
    </>
    )
};