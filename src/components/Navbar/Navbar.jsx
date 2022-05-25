import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { blog_data } from '../../constants/data_1';
import { images } from '../../constants';
import './Navbar.css';
import { AiOutlineCaretRight } from 'react-icons/ai'
import { CgFacebook, CgTwitter } from 'react-icons/cg'

const Navbar = () => {

    // let Menu_Data = blog_data;
    const [filter, setFilter] = React.useState('');


    const handleChange = (e) => {
        let filter = e.target.value;
        // console.log(filter)
        if (filter) {
            setFilter((filter))
        } else {
            setFilter("");
        }
    }


    let Menu = ['Collection', "Story", "News", "Melancholy", "Contact", "Shop"]

    // console.log('getData:' + Data);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-header_top'>
                <div className='app__navbar-header_top-left_side'>
                    <Link className='disabled' to>Shop <span>Online</span> <AiOutlineCaretRight /></Link>
                </div>


                <div className="app__navbar-header_top-logo_img">
                    <Link to="/blog-website">
                        <img src={images.logo} alt="Logo Website" />
                    </Link>
                </div>

                <div className='app__navbar-header_top-right_side'>
                    <div className="social_media">
                        <Link  className='disabled' to>
                            <CgFacebook className='icons_social' />
                        </Link>
                        <Link  className='disabled' to>
                            <CgTwitter className='icons_social' />
                        </Link>
                    </div>
                    <div className="login_section">
                        <Link className='disabled' to><AiOutlineCaretRight />Sign Up</Link>
                        <Link className='disabled' to><AiOutlineCaretRight />Log In</Link>
                    </div>
                </div>
            </div>

            <div className='separator'></div>

            <div className='app__navbar-header_bottom'>
                {/* <div className='just_space'></div> */}
                <ul>
                    {Menu.map((menu_item, index) => (
                        <li key={index}>
                            <NavLink
                                className={({ isActive }) => isActive ? " disabled" : "disabled"}
                                // to={"/blog-website/" + menu_item}
                                to
                                key={menu_item}>
                                {menu_item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}

export default Navbar