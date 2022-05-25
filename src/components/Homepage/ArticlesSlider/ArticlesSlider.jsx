import React, { useEffect, useState } from 'react';
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
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const articles = blog_data;

const ArticlesSlider = () => {

    const [filter, setFilter] = useState('');

    useEffect(() => {
        // our fetch codes
    }, []);

    const handleChange = (e) => {
        let filter = e.target.value;
        // console.log(filter)
        if (filter) {
            setFilter((filter))
        } else {
            setFilter("");
        }
    }

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    const handleOrder = (num) => {
        if (num > 4) {
            num = 1;
            handleOrder(num);
        }
        return num++;
    }

    function QueryLink({ to, ...props }) {
        let location = useLocation();
        return <Link to={to + location.search} {...props} />
    }

    const articles_list_filtered = articles
        .filter(article => article.title.includes(filter));


    const articles_list = articles_list_filtered
        .map((article, index) => {
            return (
                // let num  = index;
                <SwiperSlide className={`app__articlesSwiper order_${handleOrder(index)}`} key={article.id} >
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
            )
        })

    return (
        <div className='fixed_div'>
            {/* <input type="search" placeholder='Search For...' value={searchParams.get('filter') || ""} onChange={handleSearch} /> */}
            <div className='input_box'>
                <input type="search" placeholder='Search For...' value={filter} onChange={handleChange} />
            </div>

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
                    // when window width is >= 1440px
                    1440: {
                        width: "100%",
                        slidesPerView: 4,
                    },
                }}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >

                {articles_list_filtered.length !== 0 ?
                    articles_list :
                    <div className='not_found'>
                        <h2>Article Not Found</h2>
                    </div>
                }

            </Swiper>
        </div>
    )
}

export default ArticlesSlider