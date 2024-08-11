import { useDispatch } from 'react-redux';
import classes from './SingleAdminProd.module.css';
import { productsActions } from '../../../store/editProduct-slice';


export default function SingleAdminProduct({product}){

    const dispatch = useDispatch();


    const handleSelect = ()=>{
        dispatch(productsActions.setNewEdited(product))
    }

    return (
        <div key={product.index} onClick={handleSelect} className={classes.productDiv}>
            <h1>{product.name}</h1>
        </div>
    )
}