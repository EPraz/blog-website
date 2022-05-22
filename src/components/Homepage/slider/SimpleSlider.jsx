import React from 'react'
import { images } from '../../../constants'
// import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
// import 'swiper/swiper-bundle.css';

const carousel_images = [images.image_1, images.image_2, images.image_3];


const SimpleSlider = () => {

    // const settings = {
    //     dots: false,
    //     Infinite: true,
    //     speed: 7250,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 7000,
    //     arrows: true,
    // };
    SwiperCore.use([Autoplay, EffectFade]);
    return (
        // <Slider {...settings} className="app__simpleSlider" >
        //     {carousel_images.map((image, index) => (
        //         <img 
        //             src={image} 
        //             alt={image}
        //             key={index}
        //             />
        //     ))}
        // </Slider>
        <Swiper
                    // install Swiper modules
                    // modules={[Navigation, Autoplay]} // I want to focus here
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    effect='fade'
                    // loop
                    autoplay={{delay: 3000}}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
        >

            {carousel_images.map((image, index) => (
                <SwiperSlide className="app__simpleSlider" key={index} >
                    <img src={image} alt={image} key={image} />
                </SwiperSlide>
            ))}
            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
            ...
        </Swiper>
    )
}

export default SimpleSlider