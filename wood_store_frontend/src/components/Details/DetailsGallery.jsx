import classes from './DetailsGallery.module.css'
import productImage from '../../assets/interior.jpg'
import productImage2 from '../../assets/exterior.jpg'
import { useState } from 'react'
import ImageSlider from '../UI/ImageSlider'

export default function DetailsGellery({mainImage, images}){
    const [ isOpenGallery, setIsOpenGallery ] = useState(false)

    const galleryActionHandler = ()=>{
        setIsOpenGallery(!isOpenGallery);
    }

    let allImages = [...images, mainImage];

    return(
        <div className={classes.gallery}>
                {isOpenGallery && <ImageSlider images={allImages} onClose={galleryActionHandler}/>}
                <div  className={classes.mainImage}>
                    <img onClick={galleryActionHandler} src={mainImage} alt='Product image'/>
                </div>
                <div className={classes.otherImages}>
                    {/* {images.map(i=>{
                        <div>
                            <img src='https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg' alt='Product image'/>
                        </div>
                    })} */}
                    <div>
                        <img src='https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg' alt='Product image'/>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFNiOAwMvTAPvyCT7YjOl63ZU6irFl-TlIg&s" alt="Product image" />
                    </div>
                    <div>
                        <img src='https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg' alt='Product image'/>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFNiOAwMvTAPvyCT7YjOl63ZU6irFl-TlIg&s" alt="Product image" />
                    </div>
                    <div>
                        <img src='https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg' alt='Product image'/>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFNiOAwMvTAPvyCT7YjOl63ZU6irFl-TlIg&s" alt="Product image" />
                    </div>
                </div>
            </div>
    )
}