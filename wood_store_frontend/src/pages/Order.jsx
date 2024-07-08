import { useLocation, useNavigate } from "react-router";
import Order from "../components/Order/OrderComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function OrderPage(){

    const location = useLocation();
    const havePermission = location.state ? location.state.show : false;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!havePermission){
            navigate('/products');
            dispatch(uiActions.setErrNotification({message: `You can't navigate to Order page this way!`, header: 'No permission!' }));
        }


    }, [havePermission, navigate])

    return (
        <Order/>
    )
};