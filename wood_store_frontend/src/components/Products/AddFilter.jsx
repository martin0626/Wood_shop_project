import classes from "./AddFilter.module.css"
import ModalComponent from "../UI/ModalComponent"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadFilterProducts } from "../../store/products-actions"
import { uiActions } from "../../store/ui-slice";
import { filterActions } from "../../store/filter-slice"


const MAX_PRICE = 10000
const MIN_PRICE = 100


export default function AddFilter({onClose}){
    const currentFilter = useSelector(state => state.filter.filter)

    const priceRef = useRef()
    const [ currentPrice, setCurrentPrice ] = useState(currentFilter.price);
    const dispatch = useDispatch();

    console.log(currentFilter);

    const setLoadingUi = (time)=>{
        dispatch(uiActions.setLoading());
        let timer = setTimeout(()=>{
            dispatch(uiActions.setLoaded());
        }, time);

        return ()=> clearTimeout(timer)
    }

    const priceChangeHandler = ()=>{
        setCurrentPrice(priceRef.current.value)
    }


    const formHandler = (e)=>{
        e.preventDefault();

        const filter = {materials: []};

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());
        Object.keys(data).forEach(k=>{
            const materials = ['oak', 'beech', 'walnut'];

            if(materials.includes(k)){
                filter.materials.push(k.toUpperCase());
            }else{
                filter[k] = data[k].toUpperCase();
            }
        })

        filter.materials.length == 0 && delete filter.materials
        setLoadingUi(1000);
        dispatch(loadFilterProducts(filter));
        dispatch(filterActions.setFilter(filter));
        onClose();
    };

    const handleClearFilter = ()=>{
        setLoadingUi(1000);
        dispatch(loadFilterProducts({
            price: MAX_PRICE,
            category: 'ALL',
        }));
        dispatch(filterActions.resetFilter());
        onClose();

    };


    return (
        <ModalComponent onClose={onClose}>
            <div className={classes.filterHeader}>
                <h1>Filter</h1>
            </div>
            
            <form onSubmit={formHandler} className={classes.filterForm}>
                <div className={classes.formContainer}>
                    <div className={classes.priceFilter}>
                        <h2>Price</h2>
                        <label for="slider">Max price: {currentPrice}</label>
                        <input onChange={priceChangeHandler} defaultValue={currentPrice} ref={priceRef} type="range" id="slider" name="price" min={MIN_PRICE} max={MAX_PRICE}/>
                    </div>
                    <div className={classes.materialF}>
                        <h2>Material</h2>
                        <div className={classes.materialOptions}>
                            <div>
                                <input defaultChecked={currentFilter.materials.includes('OAK')} type="checkbox" id="option1" name="oak" value="oak"/>
                                <label for="option1">Оak</label>
                            </div>
                            <div>
                                <input defaultChecked={currentFilter.materials.includes('BEECH')} type="checkbox" id="option2" name="beech" value="beech"/>
                                <label for="option2">Beech</label>
                            </div>
                            <div>
                                <input defaultChecked={currentFilter.materials.includes('WALNUT')} type="checkbox" id="option3" name="walnut" value="walnut"/>
                                <label for="option3">Walnut</label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.otherF}>
                        <h2>Field</h2>
                        <label for="dropdown">Choose field of usage:</label>
                        <select defaultValue={currentFilter.category.toLowerCase()} id="category" name="category">
                            <option value="all">All</option>
                            <option value="interior">Interior</option>
                            <option value="exterior">Exterior</option>
                        </select>
                    </div>
                </div>
                <div className={classes.buttonFilter}>
                    <button type="submit" className="defaultBtn">Apply</button>
                    <button type="button" className="defaultBtn" onClick={handleClearFilter}>Clear Filter</button>
                </div>
            </form>
            
            
        </ModalComponent>
    )

};