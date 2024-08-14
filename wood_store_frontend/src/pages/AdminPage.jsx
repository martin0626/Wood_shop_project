import { useNavigate } from "react-router";
import AdminHomeComp from "../components/Admin/AdminEditPage/AdminHome";
import CreateProdContent from "../components/Admin/CreateProduct";
import { getToken } from "../utils/authorization";
import { useEffect } from "react";

export default function Admin(){
    let token = getToken();
    let navigate = useNavigate()
    
    useEffect(()=>{
        if(!token){
            navigate('/adminAuth')
        }
    }, [])

    return (
        <>
            <CreateProdContent/>
            <AdminHomeComp/>
        </>
    )
}