import classes from './FooterSubscribe.module.css'
import classesNavSearch from '../MainNav/NavSearch.module.css'
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { checkEmail } from '../../utils/InputCheckers';


export default function Subscribe(){

    const [ selected, setSelected ] = useState(false);
    const inputElement = useRef(false);
    const dispach = useDispatch(); 

    const handleFocus = ()=>{
        setSelected(true);
    }

    const handleBlur = ()=>{
        const timer = setTimeout(() => {
            setSelected(false)
          }, 100);
        return () => clearTimeout(timer);
    }

    const handleSubscribe = ()=>{
        const email = inputElement.current.value;
        const emailError = checkEmail(email);

        
        if(email.trim() !== ''){
            if(!emailError){
                dispach(uiActions.setGreenNotification({message: `Now You are subscribed for our top offers.`, header: 'Succesfully Subscription' }))
            }else{
                dispach(uiActions.setErrNotification({message: `This Email Address "${email}" is invalid!`, header: 'Invalid Subscription' }))
            }
        }
    }

    return (
        <div className={classes.subscribeSec}>
            <h1>Subscribe</h1> 
            <div className={classes.subsInput}>
                <input ref={inputElement} onBlur={handleBlur} onFocus={handleFocus} className={classesNavSearch.searchInput} type="text" />
                <p onClick={handleSubscribe} className={selected ? `${classes.searchIconSelected} ${classes.searchIcon}` : classes.searchIcon}><i  className="material-icons">send</i></p>
            </div>
        </div>
    )
}