import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { getDataURL } from '../../constants/data_1';
import "./SinglePage.css"

const SinglePage = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let single_page = getDataURL(params.url);

    return (
        <section>
            <h2>{single_page.title}</h2>
            <main>
                <figcaption>
                    <img src={single_page.feature_image} alt="Feature Image" />
                </figcaption>
                <article>
                    <p>{single_page.full_info}</p>
                </article>
            </main>
        </section>
    )
}

export default SinglePage