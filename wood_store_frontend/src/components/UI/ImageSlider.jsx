import Slider from "react-slick";
import './ImageSlider.css';

export default function ImageSlider({onClose, images}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // const images = [
    //     "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg",
    //     "https://housing.com/news/wp-content/uploads/2023/04/What-is-timber-wood-and-which-are-the-best-types-f.jpg",
    //     "https://hips.hearstapps.com/hmg-prod/images/rustic-weathered-wood-logs-royalty-free-image-1654709658.jpg"
    // ];
    return (
        <>
            <div className="backdrop" onClick={onClose}></div>
                <div className="image-slider-container">
                    <Slider {...settings} className="image-slider">
                            {images.map((img, index) => (
                            <div key={index}>
                                <img src={img} alt={`Slide ${index + 1}`} />
                            </div>
                            ))}
                    </Slider>
                </div>
        </>
    );
};