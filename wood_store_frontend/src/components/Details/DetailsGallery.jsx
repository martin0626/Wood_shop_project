import classes from './DetailsGallery.module.css'
import { useState } from 'react'
import ImageSlider from '../UI/ImageSlider'

export default function DetailsGellery({mainImage, images}){


    //For TEST purposes, TODO: to be replaced with allImages, images and mainImage
    const mainImageTest = "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg"

    const testImages = [
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
        "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
    ];

    const [ isOpenGallery, setIsOpenGallery ] = useState(false);
    const [ allImages, setAllImages ] = useState([...testImages, mainImageTest])

    const handleSelectImage = (selectedImg)=>{

        setAllImages( currImages =>{
            let newImages = currImages.filter(i=> i != selectedImg);
            newImages.unshift(selectedImg);
            return newImages
        } )

        setIsOpenGallery(true);
    }

    const handleCloseGallery = ()=>{
        setIsOpenGallery(false);
    }


    return(
        <div className={classes.gallery}>
                {isOpenGallery && <ImageSlider images={allImages} onClose={handleCloseGallery}/>}
                <div  className={classes.mainImage}>
                    <img onClick={()=>handleSelectImage(mainImageTest)} src={mainImageTest} alt='Product image'/>
                </div>
                <div className={classes.otherImages}>
                    {testImages.map(i=>{
                        return (
                            <div>
                                <img onClick={()=>handleSelectImage(i)} src={i} alt='Product image'/>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}