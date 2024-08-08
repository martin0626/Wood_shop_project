import { useEffect, useState } from 'react';
import classes from './ProductVisual.module.css';
import SingleEditablePr from './SingleEditablePr';
import ModalComponent from '../../UI/ModalComponent';


export default function ProductVisualComp({product}){

    const [currentProduct, setCurrentProduct] = useState(product);
    const [currentEditable, setCurrentEditable] = useState(null);

    const handleChooseElement = (el)=>{
        setCurrentEditable([el, product[el]])
        console.log(currentEditable);
        
    }

    const onCloseEdit = ()=>{
        setCurrentEditable(null);
    }


    const editProduct = (data)=>{
        //TODO finish this
        // let key = data[0];
        // let value = data[1];
        // setCurrentProduct((prevProd)=>{
        //     return {prevProd, key: value};
        // })
    }
    
    useEffect(()=>{
        setCurrentProduct(product)
    }, [product]);

    const testImages = [
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
    ];

    return (
        <section className={classes.visualSection}>
            {
                currentEditable
                    && 
                <ModalComponent onClose={onCloseEdit}>
                    <div className={classes.editForm}>
                        <h1>{currentEditable[0]}</h1>
                        <input defaultValue={currentEditable[1]}/>
                    </div>
                </ModalComponent>
            }
            {
                currentProduct
                ?
                    <div className={classes.produDet}>
                        <div className={classes.prodAction}>
                            <button className='defaultBtn'>Save Changes</button>
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
    )
}