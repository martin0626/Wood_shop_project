import classes from "./AddFilter.module.css"
import { motion } from 'framer-motion'
import SingleProductComponent from "./SingleProduct"
import ModalComponent from "../UI/ModalComponent"
import { useRef, useState } from "react"


const MAX_PRICE = 10000
const MIN_PRICE = 100


export default function AddFilter({onClose}){
    const priceRef = useRef()
    const [ currentPrice, setCurrentPrice ] = useState(MAX_PRICE);

    const priceChangeHandler = ()=>{
        setCurrentPrice(priceRef.current.value)
    }


    return (
        <ModalComponent onClose={onClose}>
            <div className={classes.filterHeader}>
                <h1>Filter</h1>
            </div>
            
            <div className={classes.formContainer}>
                <form className={classes.filterForm}>
                    
                    <div className={classes.priceFilter}>
                        <h2>Price</h2>
                        {priceRef.current && <label for="slider">Max price: {priceRef.current.value}</label>}
                        <input onChange={priceChangeHandler} defaultValue={currentPrice} ref={priceRef} type="range" id="slider" name="slider" min={MIN_PRICE} max={MAX_PRICE}/>
                    </div>
                    <div className={classes.materialF}>
                        <h2>Material</h2>
                        <div className={classes.materialOptions}>
                            <div>
                                <input type="checkbox" id="option1" name="option" value="1"/>
                                <label for="option1">Option 1</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option2" name="option" value="2"/>
                                <label for="option2">Option 2</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option3" name="option" value="3"/>
                                <label for="option3">Option 3</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option1" name="option" value="1"/>
                                <label for="option1">Option 1</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option2" name="option" value="2"/>
                                <label for="option2">Option 2</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option3" name="option" value="3"/>
                                <label for="option3">Option 3</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option1" name="option" value="1"/>
                                <label for="option1">Option 1</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option2" name="option" value="2"/>
                                <label for="option2">Option 2</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option3" name="option" value="3"/>
                                <label for="option3">Option 3</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option1" name="option" value="1"/>
                                <label for="option1">Option 1</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option2" name="option" value="2"/>
                                <label for="option2">Option 2</label>
                            </div>
                            <div>
                                <input type="checkbox" id="option3" name="option" value="3"/>
                                <label for="option3">Option 3</label>
                            </div>
                        </div>
                    </div>
                    <div className={classes.otherF}>
                        <h2>Other</h2>
                        <label for="dropdown">Choose from the dropdown:</label>
                        <select defaultValue='all' id="dropdown" name="dropdown">
                            <option value="all">All</option>
                            <option value="interior">Interior</option>
                            <option value="exterior">Exterior</option>
                        </select>
                    </div>
                    
                </form>
            </div>
            <div className={classes.buttonFilter}>
                <button>Apply</button>
                <button onClick={onClose}>Close</button>
            </div>
        </ModalComponent>
    )

};