import React from 'react';
import Slider from 'react-slick';
import { images } from '../../../constants';
import "./ArticlesSlider.css";

const carousel_images = [images.logo, images.logo, images.logo];


const ArticlesSlider = () => {

    const settings = {
        dots: false,
        Infinite: true,
        speed: 7250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        // pauseOnHover: true,
        // responsive: true,
        // useCSS: true,
        // adaptativeHeight: true,
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

export default ArticlesSlider