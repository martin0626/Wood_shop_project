import Slider from "react-slick";
import './ImageSlider.css';
import { useEffect, useRef } from "react";

export default function ImageSlider({onClose, images}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const gallery = useRef(false);

    useEffect(()=>{
        gallery.current && gallery.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <>
            <div className="backdrop" onClick={onClose}></div>
                <div ref={gallery} className="image-slider-container">
                    <Slider  {...settings} className="image-slider">
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