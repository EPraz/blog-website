import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { getInvoice } from '../../constants/data';
import { blog_data } from '../../constants/data_1';
import { images } from '../../constants';
import './Navbar.css';
import { AiOutlineCaretRight } from 'react-icons/ai'
import { CgFacebook, CgTwitter } from 'react-icons/cg'

const Navbar = () => {

    let Menu_Data = blog_data;

    // console.log('getData:' + Data);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-header_top'>
                <div className='app__navbar-header_top-left_side'>
                    <Link to=''>Shop <span>Online</span> <AiOutlineCaretRight /></Link>
                </div>

                <div className="app__navbar-header_top-logo_img">
                    <img src={images.logo} alt="" />
                </div>

                <div className='app__navbar-header_top-right_side'>
                    <div className="social_media">
                        <CgFacebook className='icons_social' />
                        <CgTwitter className='icons_social' />
                    </div>
                    <div className="login_section">
                        <Link to=''><AiOutlineCaretRight />Sign Up</Link>
                        <Link to=''><AiOutlineCaretRight />Log In</Link>
                    </div>
                </div>
            </div>

            <div className='separator'></div>

            <div className='app__navbar-header_bottom'>
                <ul>
                    {Menu_Data.map((menu_item) => (
                        <Link
                            style={{ padding: '1rem' }}
                            to={"/blog-website/" + menu_item.number}
                            key={menu_item.number}>
                            {menu_item.number}
                        </Link>
                    ))}
                </ul>
            </div>
            {/* <Outlet /> */}
        </nav>
    )
}

export default Navbar