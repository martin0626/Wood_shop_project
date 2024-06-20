import classes from './DetailsGallery.module.css'
import productImage from '../../assets/interior.jpg'
import productImage2 from '../../assets/exterior.jpg'

export default function DetailsGellery(){
    return(
        <div className={classes.gallery}>
                <div className={classes.mainImage}>
                    <img src='https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg' alt='Product image'/>
                </div>
                <div className={classes.otherImages}>
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