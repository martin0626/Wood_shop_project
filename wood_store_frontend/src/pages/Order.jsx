import { useLoaderData, useLocation, useNavigate } from "react-router";
import Order from "../components/Order/OrderComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function OrderPage(){
    const { data } = useLoaderData();
    

    console.log(data);
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
        <Order citiesData={data}/>
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


export async function loader(){

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