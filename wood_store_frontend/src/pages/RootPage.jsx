import { Outlet } from "react-router";
import MainNavigation from "../components/MainNav/MainNavigation";
import classes from "./RootPage.module.css"

export default function Root(){
    return (
    <>
        <MainNavigation/>
        <section className={classes.mainSection}>
            <Outlet />
        </section>
    </>
    );
};