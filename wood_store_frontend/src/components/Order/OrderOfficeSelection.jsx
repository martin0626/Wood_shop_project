import { useRef, useState } from 'react';
import classes from './OrderOfficeSelection.module.css'


const DEFAULT_REGION = 'Sofia';

//TODO finish addresses 
const loadAddresses = async (cityId)=>{
    try {

        //ECONT API Get All Cities in Bulgaria - BGR
        let request = await fetch("http://ee.econt.com/services/Nomenclatures/NomenclaturesService.getOffices.json", {
            method: "POST",
            body: JSON.stringify({
                countryCode: 'BGR',
                cityID: cityId
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });

        let response = await request.json();

        console.log(response);
        
        return {data: setDataByRegions(response)}
    }catch(err){
        return err;
    }
}


export default function OfficeSelection({citiesData}){

    //Cities Controller
    const [ cities, setCities ] = useState(citiesData[DEFAULT_REGION]);
    const [ currentCities, setCurrentCities ] = useState(cities);
    const cityInput = useRef()


    //Regions Controller
    const allRegions = Object.keys(citiesData)
    const [ region, setRegion ] = useState(DEFAULT_REGION);
    const [ currentRegions, setCurrentRegions ] = useState(allRegions);
    const regionInput = useRef();


    
    const handleSelectRegion = (regionName)=>{
        let reg = regionName ? regionName : currentRegions[0]
        setRegion(reg);
        setCities(citiesData[reg]);
        setCurrentCities(citiesData[reg]);
        regionInput.current.value = reg;
        setCurrentRegions([reg])
        cityInput.current.value = '';
    };

    const onChangeRegion = (e)=>{
        const input = e.target.value;
        const result = allRegions.filter(reg=> 
            reg.toLowerCase().startsWith(input.toLowerCase())
        );
        setCurrentRegions(result)
    };

    const handleSelectCity = (city)=>{
        let currCity = city ? city : currentCities[0];
        cityInput.current.value = currCity.name;
        setCurrentCities([currCity]);
        loadAddresses(city.id)
    };

    const onChangeCity = (e)=>{
        const input = e.target.value;
        const result = cities.filter(city=> 
            city.name.toLowerCase().startsWith(input.toLowerCase())
        );
        setCurrentCities(result);
    }


    return (
        <div className={classes.officeSection}> 
            <div className={classes.orederRegion}>
                <input ref={regionInput}  onChange={onChangeRegion} defaultValue={region} type="search" />
                <ul className={classes.allRegions}>
                    {currentRegions.map(region=>{
                        if(region != ''){
                            return <li onClick={()=>handleSelectRegion(region)}>{region}</li>
                        }
                    })}
                </ul>
            </div>
            <div  className={classes.orederCity}>
                <input ref={cityInput}  onChange={onChangeCity} type="search" />
                <ul>
                    {currentCities && currentCities.map(city=>{
                        return <li onClick={()=>handleSelectCity(city)}>{city.name}</li>
                    })}
                </ul>
            </div>

            
            <div className={classes.orederAddress}>
                <input type="search" />
                <ul></ul>
            </div>
        </div>
    )
}