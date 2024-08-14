import {  redirect, useNavigate } from "react-router";
import Login from "../components/Admin/LoginAdmin";
import { getToken, setToken } from "../utils/authorization";
import { useEffect } from "react";

export default function AdminAuth(){

    let token = getToken();
    let navigate = useNavigate()
    
    useEffect(()=>{
        if(token){
            navigate('/admin')
        }
    }, [])


    return (
        <>
            <Login/>
        </>
    )
}


export const action = async({request})=>{

    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
    const authData = {
        username, password
    }

    

    try{
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authData),
        });

        const resData = await response.json();
        const token = resData.token;

        if(token){
            setToken(token);
            return redirect('/admin')
        }

        return resData;

    }catch(err){
        console.log(err);
        return 'ads'
    }

} 