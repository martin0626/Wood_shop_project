import classes from './NavSearch.module.css'
import classesNav from './MainNavigation.module.css'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';



export default function NavSearch(){
    const [ selected, setSelected ] = useState(false);
    const [ results, setResults ] = useState([]);
    const products = useSelector(state => state.products.products);
    const navigate = useNavigate();
    const userInput = useRef(null);

    const handleFocus = ()=>{
        setSelected(true);
        let input = userInput.current.value

        if(input.length > 1){
            let result = products.filter(p=> p.name.toLowerCase().includes(input.toLowerCase()));
            setResults(result);
        }else{
            setResults([]);
        }
    }

    
    const handleChange = (e)=>{
        let input = e.target.value.toLowerCase();

        if(input.length > 1){
            let result = products.filter(p=> p.name.toLowerCase().includes(input.toLowerCase()));
            setResults(result);
        }else{
            setResults([]);
        }
    }

    const handleSelectedResult = (id)=>{
        navigate('products/' + id)
        userInput.current.value = ''
    }

    const handleSearch = ()=>{
        navigate('products?name=' + userInput.current.value.trim())
        userInput.current.value = ''
    }

    const handleBlur = ()=>{
        const timer = setTimeout(() => {
            setSelected(false)
          }, 100);
        return () => clearTimeout(timer);
    }


    return (
        <div className={classes.searchNav}>
            <input placeholder='Search...' ref={userInput} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className={classes.searchInput} type="text" />
            <p className={selected ? `${classes.searchIconSelected} ${classes.searchIcon}` : classes.searchIcon} onClick={handleSearch}><i className="material-icons">search</i></p>
            {
                results.length > 0 && selected && (
                    <ul className={classes.searchResults}>  
                        {results.map(r=> <li onClick={()=> handleSelectedResult(r.id)}>{r.name}</li>)}
                    </ul>    
                )
            }
        </div>
    )
}