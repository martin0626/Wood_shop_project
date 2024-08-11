import { useEffect, useState } from 'react';
import classes from './ProductVisual.module.css';
import SingleEditablePr from './SingleEditablePr';
import ModalComponent from '../../UI/ModalComponent';
import EditFormEl from './EditElement/EditForm';
import { useDispatch, useSelector } from 'react-redux';
import LoadingUi from '../../UI/LoadingUI';
import { editActions } from '../../../store/editProduct-slice';


export default function ProductVisualComp(){

    // const [currentProduct, setCurrentProduct] = useState(product);
    const [currentEditable, setCurrentEditable] = useState(null);
    const isLoading = useSelector(state => state.ui.isLoading);

    const isEdited = useSelector(state => state.editableProduct.isEdited);
    const currentProduct = useSelector(state=> state.editableProduct.product)
    const dispatch = useDispatch();
    currentProduct
    console.log(currentProduct);
    
    

    const handleChooseElement = (el)=>{
        setCurrentEditable([el, currentProduct[el]])        
    }

    const onCloseEdit = ()=>{
        setCurrentEditable(null);
    }


    const editProduct = (key, value)=>{
        let updatedProduct = {...currentProduct};
        updatedProduct[key] = value;
        dispatch(editActions.editProduct(updatedProduct));   
    }

    const testImages = [
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
    ];

    return (
        <>
        
            {
            isLoading   
                ?
            <LoadingUi/>
                :
            <section className={classes.visualSection}>
                {
                    currentEditable
                        && 
                    <EditFormEl onCloseEdit={onCloseEdit} currentEditable={currentEditable} onEdit={editProduct}/>
                }
                {
                    currentProduct
                    ?
                        <div className={classes.produDet}>
                            <div className={classes.prodAction}>
                                <button  className={`defaultBtn ${!isEdited && classes.disabled}`}>Save Changes</button>
                                <button className='defaultBtn'>Delete</button>
                            </div>
                            <div className={classes.prodContent}>
                                <SingleEditablePr id={'name'} onChoose={handleChooseElement}>
                                    <p><span>Name: </span><span style={{fontWeight: "bold"}}>{currentProduct.name}</span></p> 
                                </SingleEditablePr>
                                <SingleEditablePr id={'description'} onChoose={handleChooseElement}>
                                    <p><span>Description: </span><span style={{fontWeight: "bold"}}>{currentProduct.description}</span></p>
                                </SingleEditablePr>
                                <SingleEditablePr id={'imageUrl'} onChoose={handleChooseElement}>
                                    <p>Main Image:</p>
                                    <div className={classes.mainImage}>
                                        <img src="https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg" />
                                    </div>
                                </SingleEditablePr>
                                <SingleEditablePr id={'additionalImgUrls'} onChoose={handleChooseElement}>
                                    <p>Gallery:</p>
                                    <div className={classes.imagesAdmin}>
                                        {testImages.map((img, index) => (
                                            <div className={classes.singleImg}  key={index}>
                                                <img src={img}/>
                                            </div>
                                        ))}
                                    </div>  
                                </SingleEditablePr>
                                <SingleEditablePr id={'price'} onChoose={handleChooseElement}>
                                    <p><span>Price: </span><span style={{fontWeight: "bold"}}>{currentProduct.price}BGN</span></p>
                                </SingleEditablePr>   
                                <SingleEditablePr id={'width'} onChoose={handleChooseElement}>
                                    <p><span>Width: </span><span style={{fontWeight: "bold"}}>{currentProduct.width}</span></p>
                                </SingleEditablePr>
                                <SingleEditablePr id={'height'} onChoose={handleChooseElement}>
                                    <p><span>Height: </span><span style={{fontWeight: "bold"}}>{currentProduct.height}</span></p>
                                </SingleEditablePr>  
                                <SingleEditablePr id={'weight'} onChoose={handleChooseElement}>
                                    <p><span>Weight: </span><span style={{fontWeight: "bold"}}>{currentProduct.weight}</span></p>
                                </SingleEditablePr>         
                                <SingleEditablePr id={'quantity'} onChoose={handleChooseElement}>
                                    <p><span>Quantity: </span><span style={{fontWeight: "bold"}}>{currentProduct.quantity}</span></p>
                                </SingleEditablePr>   
                                <SingleEditablePr id={'material'} onChoose={handleChooseElement}>
                                    <p><span>Material: </span><span style={{fontWeight: "bold"}}>{currentProduct.material}</span></p>
                                </SingleEditablePr>   
                                <SingleEditablePr id={'category'} onChoose={handleChooseElement}>
                                    <p><span>Category: </span><span style={{fontWeight: "bold"}}>{currentProduct.category}</span></p>
                                </SingleEditablePr>  
                                
                            </div>
                        </div>
                        
                    :
                        <h1>No product Selected</h1>
                }
            </section>
            }
        </>
    )
}