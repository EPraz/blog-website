import React from 'react'
import { images } from '../../../constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
// import 'swiper/swiper-bundle.css';
import "./SimpleSlider.css";

const carousel_images = [images.image_1, images.image_2, images.image_3];


const SimpleSlider = () => {

    SwiperCore.use([Autoplay, EffectFade]);
    return (
        <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    effect='fade'
                    autoplay={{delay: 3000}}
                    className="simpleSlider"
        >

            {carousel_images.map((image, index) => (
                <SwiperSlide className="app__simpleSlider" key={index} >
                    <img src={image} alt={image} key={image} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SimpleSlider