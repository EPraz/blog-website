import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getDataURL } from '../../constants/data_1';
import "./SinglePage.css"
import {AiFillFacebook} from 'react-icons/ai'

const SinglePage = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let single_page = getDataURL(params.url);

    return (
        <section className='app__singlePage'>
            <main className='app__singlePage-container'>
                <article className='app__singlePage-content'>
                    <h2 className='app__singlePage-title'>{single_page.title}</h2>
                    <div className='app__singlePage-share_buttons'>

                    <Link  className='disabled' to >
                        <AiFillFacebook className='icon' />
                        Like
                    </Link>
                    </div>
                    <p>{single_page.full_info}</p>
                </article>
                <figcaption className='app__singlePage-image'>
                    <img src={single_page.feature_image} alt="Feature Image" />
                </figcaption>
            </main>
        </section>
    )
}

export default SinglePage