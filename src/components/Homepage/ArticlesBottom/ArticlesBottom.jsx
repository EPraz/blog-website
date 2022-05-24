import React from 'react'
import { images } from '../../../constants'
// import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "./ArticlesBottom.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { blog_data } from '../../../constants/data_1';
import { Link } from 'react-router-dom';
// import 'swiper/swiper-bundle.css';



const list_articles = blog_data;


const swiper_articlesBottom = list_articles.slice(0, 3).map((item, index) => (
    <SwiperSlide className="app__articlesBottom-slider" key={index} >
        <div className='app__articlesBottom-image'>
            <Link to="">

                <img src={item.feature_image} alt={item.title} />
            </Link>
        </div>
        <div className='app__articlesBottom-content'>
            <Link to="">
                <h2>{item.title}</h2>
            </Link>
            <p>{item.excerpt}</p>
        </div>
    </SwiperSlide>
));

const ArticlesBottom = () => {

    SwiperCore.use([]);
    return (
        <div className='app__articlesBottom'>
            {list_articles.slice(0, 3).map((item, index) => (
                <div className="app__articlesBottom-slider" key={index} >
                    <div className='app__articlesBottom-image'>
                        <Link to="">
                            <img src={item.feature_image} alt={item.title} />
                        </Link>
                    </div>
                    <div className='app__articlesBottom-content'>
                        <Link to="">
                            <h2>{item.title}</h2>
                        </Link>
                        <p>{item.excerpt}</p>
                    </div>
                </div>
            ))}



        </div>
    )
}

export default ArticlesBottom