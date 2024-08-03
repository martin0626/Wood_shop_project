
import { useDispatch } from 'react-redux';
import classes from './ClearFilterPin.module.css'
import { loadAllProducts } from '../../store/products-actions';
import { filterActions } from '../../store/filter-slice';
import { uiActions } from '../../store/ui-slice';

export default function FilterPin(){

    const dispatch = useDispatch();

    const setLoadingUi = (time)=>{
        dispatch(uiActions.setLoading());
        let timer = setTimeout(()=>{
            dispatch(uiActions.setLoaded());
        }, time);

        return ()=> clearTimeout(timer)
    }

    const handleClear = ()=>{
        setLoadingUi(1000);
        dispatch(loadAllProducts());
        dispatch(filterActions.resetFilter());
    }

    return (
        <div onClick={handleClear} className={classes.filterPin}>
            <p className={classes.iconPin}>
                <span class="material-symbols-outlined">
                    filter_list_off
                </span>
            </p>
        </div>
    )
}