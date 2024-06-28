import classes from './NavSearch.module.css'
import classesNav from './MainNavigation.module.css'
import { useState } from 'react'



export default function NavSearch(){
    const [ selected, setSelected ] = useState(false);

    const handleFocus = ()=>{
        setSelected(true);
    }

    const handleBlur = ()=>{
        setSelected(false);
    }

    return (
        <div className={classes.searchNav}>
            <input placeholder='Search...' onFocus={handleFocus} onBlur={handleBlur} className={classes.searchInput} type="text" />
            <p className={selected ? `${classes.searchIconSelected} ${classes.searchIcon}` : classes.searchIcon}><i className="material-icons">search</i></p>
        </div>
    )
}