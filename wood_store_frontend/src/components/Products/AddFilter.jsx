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
    const [otherMenuOpen, setOtherMenuOpen] = useState(false);
    const [otherOption, setOtherOption] = useState(currentFilter.category);
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

        let filter = {materials: []};

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
        filter = {...filter, category: otherOption};
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

    const handleSelectOtherOption = (option)=>{
        setOtherOption(option);
        setOtherMenuOpen(false)
    }


    return (
        <ModalComponent onClose={onClose}>
            <div className={classes.filterHeader}>
                <h1>Filter</h1>
            </div>
            
            <form onSubmit={formHandler} className={classes.filterForm}>
                <div className={classes.formContainer}>
                    <div className={classes.priceFilter}>
                        <h2>Price</h2>
                        <div className={classes.priceContent}>
                            <label htmlFor="slider">Max price: {currentPrice}</label>
                            <input onChange={priceChangeHandler} defaultValue={currentPrice} ref={priceRef} type="range" id="slider" name="price" min={MIN_PRICE} max={MAX_PRICE}/>
                        </div>
                    </div>
                    <div className={classes.materialF}>
                        <h2>Material</h2>
                        <div className={classes.materialOptions}>
                            <div>
                                <input defaultChecked={currentFilter.materials.includes('OAK')} type="checkbox" id="option1" name="oak" value="oak"/>
                                <label htmlFor="option1">Оak</label>
                            </div>
                            <div>
                                <input defaultChecked={currentFilter.materials.includes('BEECH')} type="checkbox" id="option2" name="beech" value="beech"/>
                                <label htmlFor="option2">Beech</label>
                            </div>
                            <div>
                                <input defaultChecked={currentFilter.materials.includes('WALNUT')} type="checkbox" id="option3" name="walnut" value="walnut"/>
                                <label htmlFor="option3">Walnut</label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.otherF}>
                        <h2>Field</h2>
                        <div className={classes.otherContent}>
                            <label htmlFor="otherOption">Choose</label>
                            <input onFocus={()=> setOtherMenuOpen(true)} readOnly="true" value={otherOption} type="text" id="otherOption"/>
                            <span onClick={()=> setOtherMenuOpen(!otherMenuOpen)} class={`material-symbols-outlined ${classes.otherIcon}`}>{otherMenuOpen ? 'close' : 'menu'}</span>
                            {
                                otherMenuOpen 
                                    &&
                                <ul className={classes.otherOptions}>
                                    <li onClick={()=>handleSelectOtherOption('ALL')}>all</li>
                                    <li onClick={()=>handleSelectOtherOption('INTERIOR')}>interior</li>
                                    <li onClick={()=>handleSelectOtherOption('EXTERIOR')}>exterior</li>
                                </ul>
                            }
                        </div>
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