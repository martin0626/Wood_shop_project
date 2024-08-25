import { redirect, useLoaderData, useLocation, useNavigate } from "react-router";
import Order from "../components/Order/OrderComponent";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Await, defer } from 'react-router-dom'
import LoadingUi from "../components/UI/LoadingUI";


export default function OrderPage(){
    const { data } = useLoaderData();
    

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
        <Suspense fallback={<LoadingUi/>}>
            <Await resolve={data}>
                {(loadedData)=> <Order citiesData={loadedData.data}/>}
            </Await>
        </Suspense>
    )
};



function setDataByRegions(data){
    let result = {}

    let dataTo200 = data['cities'];
    
    dataTo200.forEach(element => {
        let key = element['regionNameEn'];
        let city = element['nameEn'];
        let cityId = element['id'];
        let cityObject = {name: city, id: cityId};

        if(result[key]){
            result[key].push(cityObject);
        }else{
            result[key] = [cityObject];
        }
    });
    
    // result = result.reducer((acc, obj)=>)

    return result;
}

async function loadAllEcontData(){
    try {
        //ECONT API Get All Cities in Bulgaria - BGR
        let request = await fetch("http://ee.econt.com/services/Nomenclatures/NomenclaturesService.getCities.json", {
            method: "POST",
            body: JSON.stringify({
                countryCode: 'BGR'
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });

        let response = await request.json();
        
        return {data: setDataByRegions(response)}
    }catch(err){
        return err;
    }
}


export async function loader(){
    return defer({
        data: loadAllEcontData(),
    })
} 


export async function action({request}) {
   
//TODO: Check basket request prop
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(data);

    try{
        const response = await fetch('http://localhost:8000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        });

        const resData = await response.json();
        

        console.log(resData);

        return redirect('/');

    }catch(err){
        console.log(err);
        return 'ads'
    }
}