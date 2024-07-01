import classes from "./AddFilter.module.css"
import ModalComponent from "../UI/ModalComponent"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { loadFilterProducts } from "../../store/products-actions"


const MAX_PRICE = 10000
const MIN_PRICE = 100


export default function AddFilter({onClose}){
    const priceRef = useRef()
    const [ currentPrice, setCurrentPrice ] = useState(MAX_PRICE);
    const dispatch = useDispatch();

    const priceChangeHandler = ()=>{
        setCurrentPrice(priceRef.current.value)
    }


    const formHandler = (e)=>{
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());

        dispatch(loadFilterProducts(data))
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
                        <label for="slider">Max price: {currentPrice}</label>
                        <input onChange={priceChangeHandler} defaultValue={currentPrice} ref={priceRef} type="range" id="slider" name="maxPrice" min={MIN_PRICE} max={MAX_PRICE}/>
                    </div>
                    <div className={classes.materialF}>
                        <h2>Material</h2>
                        <div className={classes.materialOptions}>
                            <div>
                                <input type="checkbox" id="option1" name="oak" value="oak"/>
                                <label for="option1">Оak</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option2" name="beech" value="beech"/>
                                <label for="option2">Beech</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option3" name="walnut" value="walnut"/>
                                <label for="option3">Walnut</label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.otherF}>
                        <h2>Field</h2>
                        <label for="dropdown">Choose field of usage:</label>
                        <select defaultValue='all' id="field" name="field">
                            <option value="all">All</option>
                            <option value="interior">Interior</option>
                            <option value="exterior">Exterior</option>
                        </select>
                    </div>
                </div>
                <div className={classes.buttonFilter}>
                    <button className="defaultBtn">Apply</button>
                    <button className="defaultBtn" onClick={onClose}>Close</button>
                </div>
            </form>
            
            
        </ModalComponent>
    )

};