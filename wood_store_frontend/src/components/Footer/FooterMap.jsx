import { NavLink, useLocation } from 'react-router-dom'
import classes from './FooterMap.module.css'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';


export default function FooterNav(){
    const dispatch = useDispatch();
    const {pathname} = useLocation();


    const handleOpenCart = ()=>{
        dispatch(uiActions.openCart());
    }

    return (
        <div className={classes.footerNav}>
            <h1>Navigation</h1>
            <div className={classes.mapLinks}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/products'}>Products</NavLink>
                <NavLink to={pathname} onClick={handleOpenCart}>Cart</NavLink>
                <NavLink to={'/adminAuth'}>Admin</NavLink>
            </div>
        </div>
    )
}

