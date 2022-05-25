import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getDataURL } from '../../constants/data_1';
import "./SinglePageReverse.css"
import {AiFillFacebook} from 'react-icons/ai'

const SinglePageReverse = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let single_page = getDataURL(params.url);

    return (
        <section className='app__singlePageReverse'>
            <main className='app__singlePageReverse-container'>
                <article className='app__singlePageReverse-content'>
                    <h2 className='app__singlePageReverse-title'>{single_page.title}</h2>
                    <div className='app__singlePageReverse-share_buttons'>

                    <Link  className='disabled' to >
                        <AiFillFacebook className='icon' />
                        Like
                    </Link>
                    </div>
                    <p>{single_page.full_info}</p>
                </article>
                <figcaption className='app__singlePageReverse-image'>
                    <img src={single_page.feature_image} alt="Feature Image" />
                </figcaption>
            </main>
        </section>
    )
}

export default SinglePageReverse