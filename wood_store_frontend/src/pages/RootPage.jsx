import { Outlet } from "react-router";
import MainNavigation from "../components/MainNav/MainNavigation";

export default function Root(){
    return (
    <>
        <MainNavigation/>
        <Outlet />
    </>
    );
};