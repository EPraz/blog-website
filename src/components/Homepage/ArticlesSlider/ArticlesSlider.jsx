import React from 'react';
// import Slider from 'react-slick';
import { images } from '../../../constants';
import "./ArticlesSlider.css";
// Import Swiper React components
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { MdOutlineDoubleArrow } from 'react-icons/md'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { blog_data, getTitleID } from '../../../constants/data_1';
import { Link, useLocation } from 'react-router-dom';
// import { getTitleID } from '../../../constants/data_1';
// import 'swiper/css/autoplay';
// import 'swiper/css/effect-fade';
// import 'swiper/css/loop'; 
const carousel_images = [images.image_1, images.image_2, images.image_3, images.image_3, images.image_3];

const articles = blog_data;

const ArticlesSlider = () => {


    // SwiperCore.use([EffectFade, Navigation, Pagination]);
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    const handleOrder = (num) => {
        if (num > 4) {
            num = 1;
            handleOrder(num);
        }
        return num++;
    }

    function QueryLink({to, ...props}) {
        let location = useLocation();
        // let title_id = getTitleID(article.id);
        return <Link to={to + location.search} {...props} />
      }

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]} // I want to focus here
            spaceBetween={1}
            slidesPerView={4}
            breakpoints={{
                // when window width is >= 640px
                640: {
                    width: 640,
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
                // when window width is >= 768px
                1440: {
                    width: "100%",
                    slidesPerView: 4,
                },
            }}
            navigation
            // loop
            // autoplay={{delay: 3000}}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className="mySwiper"
        >
            {articles.map((article, index) => (
                // let num  = index;
                <SwiperSlide className={`app__articlesSwiper order_${handleOrder(index)}`} key={article.id}>
                    <div className='container'  >
                        <div className='header'>
                            <h2 className={`article_title `}>{article.title}</h2>
                            <div className={`article_date `}>
                                <p >{article.date} </p>
                                <div className='underline_dec'></div>
                            </div>
                        </div>
                        <img src={article.feature_image} alt={article.feature_image} className={`feature_img`} />

                        <div className={`content `}>
                            <p className={`read_more`}>
                                Are you interested on the article?
                                {/* <QueryLink to={`/blog-website/collection/${getTitleID(article.id)}`}> */}
                                <QueryLink to={`/blog-website/collection/${article.url}`}>
                                    Read More Here <MdOutlineDoubleArrow />
                                </QueryLink>
                            </p>
                            <p className={`article_excerpt`}>{article.excerpt}</p>
                        </div>
                    </div>
                    {/* <img src={image} alt={image} className="slide-image" /> */}
                </SwiperSlide>
            ))}
            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
    )
}

export default ArticlesSlider