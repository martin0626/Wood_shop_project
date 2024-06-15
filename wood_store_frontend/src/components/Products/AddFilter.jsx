import classes from "./AddFilter.module.css"
import { motion } from 'framer-motion'
import SingleProductComponent from "./SingleProduct"
import ModalComponent from "../UI/ModalComponent"


export default function AddFilter({onClose}){
    return (
        <ModalComponent onClose={onClose}>
            <div className={classes.filterHeader}>
                <h1>Filter</h1>
            </div>
            
            <form className={classes.filterForm}>
                
                <div className={classes.priceFilter}>
                    <h2>Price</h2>
                    <label for="slider">Choose a value:</label>
                    <input type="range" id="slider" name="slider" min="0" max="100"/>
                </div>
                <div class="form-group">
                    <h2>Material</h2>
                    <label>Choose an option:</label>
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
                <div class="form-group">
                    <h2></h2>
                    <label for="dropdown">Choose from the dropdown:</label>
                    <select id="dropdown" name="dropdown">
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                    </select>
                </div>
                <div className={classes.buttonFilter}>
                    <button>Apply</button>
                    <button>Clear</button>
                </div>
            </form>
        </ModalComponent>
    )

};