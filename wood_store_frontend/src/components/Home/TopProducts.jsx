import Slider from "react-slick";
import classes from "./TopProducts.module.css"
import { useNavigate } from "react-router";

export default function TopProducts({products}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const navigate = useNavigate();

    const handleProductSelect = (id)=>{
        navigate('products/' + id);
    }

    return (
        <section className={classes.topSection}>
                <div className={classes.topHeader}>
                    <h1>Check Our Top 10 Products</h1>

                </div>
                <div className={classes['product-slider-container']}>
                    <Slider  {...settings} className="image-slider">
                            {products.map((product) => (
                                
                                <div onClick={()=>handleProductSelect(product.id)} className={classes.cardTop} key={product.id}>
                                    <div className={classes.imageCard}>
                                        <img src='https://i.etsystatic.com/15705690/r/il/33dc60/1843727366/il_fullxfull.1843727366_flps.jpg' alt="product IMG" />
                                    </div>
                                    <div className={classes.descriptionTopPr}>
                                        <p>{product.name}</p>
                                        <p>{product.price}BGN</p>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
        </section>
    )
}
