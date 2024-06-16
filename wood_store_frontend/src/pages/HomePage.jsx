import { useEffect, useState } from "react"
import HomeSlider from "../components/Home/HomeSlider"

export default function Home(){

    const [ products, setProducts ] = useState();

    useEffect(()=>{
        const loadProducts = async ()=>{
            const req = await fetch('http://localhost:8000/api/products');
            const data = await req.json();

            return data;
        }

        loadProducts();
    }, [])

    return (
    <>
        <HomeSlider/>
    </>
    )
};