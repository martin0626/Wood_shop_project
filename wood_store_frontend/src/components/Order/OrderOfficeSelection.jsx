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
        let addresses = response.offices.map(e=> e.address.fullAddressEn);
        
        return addresses
    }catch(err){
        return err;
    }
}


export default function OfficeSelection({citiesData, handleChangeView, onAddressSubmit}){


    //Other controllers
    const [ selectedInput, setSelectedInput ] = useState('');

    //Cities Controller
    const [ cities, setCities ] = useState(citiesData[DEFAULT_REGION]);
    const [ currentCities, setCurrentCities ] = useState(cities);
    const cityInput = useRef()


    //Regions Controller
    const allRegions = Object.keys(citiesData)
    const [ region, setRegion ] = useState(DEFAULT_REGION);
    const [ currentRegions, setCurrentRegions ] = useState(allRegions);
    const regionInput = useRef();


    //Address Contorller
    const [allAddress, setAllAddress] = useState([]);
    const addressInput = useRef()

    
    const handleSelectRegion = (regionName)=>{
        let reg = regionName ? regionName : currentRegions[0]
        setRegion(reg);
        setCities(citiesData[reg]);
        setCurrentCities(citiesData[reg]);
        regionInput.current.value = reg;
        setCurrentRegions([reg])
        cityInput.current.value = '';
        addressInput.current.value = '';

    };

    const onChangeRegion = (e)=>{
        const input = e.target.value;
        const result = allRegions.filter(reg=> 
            reg.toLowerCase().startsWith(input.toLowerCase())
        );
        setCurrentRegions(result)
    };

    const handleSelectCity = async (city)=>{
        let currCity = city ? city : currentCities[0];
        cityInput.current.value = currCity.name;
        setCurrentCities([currCity]);
        let address = await loadAddresses(city.id);
        addressInput.current.value = '';


        if(address){
            setAllAddress(address);
        }
    };

    const onChangeCity = (e)=>{
        const input = e.target.value;
        const result = cities.filter(city=> 
            city.name.toLowerCase().startsWith(input.toLowerCase())
        );
        setCurrentCities(result);
    }


    const handleSelectAddress = (address)=>{
        addressInput.current.value = address;
    }

    const handleFocusInput = (e)=>{
        let inputId = e.target.id;
        let timer = setTimeout(()=>{
            setSelectedInput(inputId);
          }, 100);
  
        return () => clearTimeout(timer);
    }

    const handleBlurInput = (e)=>{
        let timer = setTimeout(()=>{
          setSelectedInput('');
        }, 100);

        regionInput.current.value = region

        return () => clearTimeout(timer);
    }

    const handleSubmit = ()=>{
        onAddressSubmit({
            city: cityInput.current.value,
            addressDelivery: addressInput.current.value, 
        })
    }

    return (
        <div className={classes.officeSection}>
            <div className={classes.companyChoose}>
                <img src="https://www.primorsko24.bg/files/images/2017/12/econt-logo.png" alt="ECONT LOGO" />
                <h2>Choose address for delivery:</h2>
            </div>
            
            <div className={classes.addressInput}>
                <div className={classes.orederRegion}>
                    <label className={selectedInput === 'region' && classes.clicked} htmlFor="region">Region</label>
                    <input 
                        autocomplete="false" 
                        onBlur={handleBlurInput} 
                        onFocus={handleFocusInput} 
                        className={classes.standartInput} 
                        ref={regionInput}  
                        onChange={onChangeRegion} 
                        defaultValue={region} 
                        id="region" 
                        name="region" 
                        type='select'
                        required
                    />
                    <div className={classes.iconAddress}>
                        <span class="material-symbols-outlined">arrow_drop_down</span>
                    </div>
                    {
                        selectedInput === 'region' 
                            
                        &&

                        <ul className={classes.resultList}>
                            {currentRegions.map(region=>{
                                if(region != ''){
                                    return <li onClick={()=>handleSelectRegion(region)}>{region}</li>
                                }
                            })}
                        </ul>
                    }         
                </div>

                <div  className={classes.orederCity}>
                    <label className={selectedInput === 'city' && classes.clicked} htmlFor="city">City</label>
                    <input 
                        onBlur={handleBlurInput} 
                        onFocus={handleFocusInput} 
                        className={classes.standartInput} 
                        ref={cityInput}  
                        onChange={onChangeCity} 
                        id="city" 
                        name="city" 
                        required 
                    />
                    <div className={classes.iconAddress}>
                        <span class="material-symbols-outlined">arrow_drop_down</span>
                    </div>
                   {
                        selectedInput === 'city' 
                            
                        &&

                        <ul className={classes.resultList}>
                            {currentCities && currentCities.map(city=>{
                                return <li onClick={()=>handleSelectCity(city)}>{city.name}</li>
                            })}
                        </ul>
                   }

                   
                </div>

                
                <div className={classes.orederAddress}>
                    <label className={selectedInput === 'address' && classes.clicked} htmlFor="address">Address</label>
                    <input 
                        className={classes.standartInput} 
                        onBlur={handleBlurInput} 
                        onFocus={handleFocusInput} 
                        ref={addressInput} 
                        id="address" 
                        name="address" 
                        required
                    />
                    <div className={classes.iconAddress}>
                        <span class="material-symbols-outlined">arrow_drop_down</span>
                    </div>
                    {
                        selectedInput === 'address' 
                        
                        &&

                        <ul className={classes.resultList}>
                            {allAddress && allAddress.map(address=>{
                                return <li onClick={()=>handleSelectAddress(address)}>{address}</li>
                            })}
                        </ul>
                    }
                </div>   
            </div>
            <div className={classes.addressBtns}>
                <button onClick={()=>handleChangeView('PERSONALINFO')} className='defaultBtn'>Back</button>
                <button onClick={handleSubmit} className='defaultBtn'>Finish Order</button>
            </div>
        </div>
    )
}