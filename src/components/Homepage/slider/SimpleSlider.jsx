import React from 'react'
import { images } from '../../../constants'
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

const carousel_images = [images.image_1, images.image_2, images.image_3];


const SimpleSlider = () => {

    const settings = {
        dots: false,
        Infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
    };

    return (
            <Slider {...settings} className="app__simpleSlider" >
                {carousel_images.map((image, index) => (
                    <img 
                        src={image} 
                        alt={image}
                        key={index}
                        />
                ))}
            </Slider>
    )
}

export default SimpleSlider