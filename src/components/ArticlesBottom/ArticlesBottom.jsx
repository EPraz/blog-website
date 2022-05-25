import React from 'react'
import "./ArticlesBottom.css";
import { blog_data } from '../../constants/data_1';
import { Link, NavLink } from 'react-router-dom';

const list_articles = blog_data;

const ArticlesBottom = () => {

    return (
        <div className='app__articlesBottom'>
            {list_articles.slice(0, 3).map((item, index) => (
                <div className="app__articlesBottom-slider" key={index} >
                    <div className='app__articlesBottom-image'>
                        <Link to={`/blog-website/articles/${item.url}`} >
                            <img src={item.feature_image} alt={item.title} />
                        </Link>
                    </div>
                    <div className='app__articlesBottom-content'>
                        <NavLink 
                            to={`/blog-website/articles/${item.url}`} 
                            className={({ isActive }) => isActive ? "isActive" : ""}
                            key={item.id}>
                            <h2>{item.title}</h2>
                        </NavLink>
                        <p>{item.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArticlesBottom