import { useDispatch, useSelector } from 'react-redux';
import classes from './SingleAdminProd.module.css';
import { editActions } from '../../../store/editProduct-slice';
import { uiActions } from '../../../store/ui-slice';


export default function SingleAdminProduct({product}){

    const dispatch = useDispatch();
    const selectedProduct = useSelector(state=> state.editableProduct.product);
    const isEdited = useSelector(state => state.editableProduct.isEdited);


    const handleSelect = ()=>{

        let confirmed = true;

        if(isEdited){
            confirmed = window.confirm("There are unsaved changes! Are you sure you want to choose another product for edit?");
        };

        
        if (confirmed){
            dispatch(editActions.setNewEdited(product))
            dispatch(uiActions.setLoading());
            let timer = setTimeout(()=>{
                dispatch(uiActions.setLoaded());
            }, 500);
            
            return ()=> clearTimeout(timer)
        }
    }

    return (
        <div  key={product.index} onClick={handleSelect} className={`${classes.productDiv} ${selectedProduct.id === product.id && classes.selected}`}>
            <h1>{product.name}</h1>
        </div>
    )
}