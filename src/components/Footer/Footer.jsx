import React from 'react'
import "./Footer.css"
import { GoPrimitiveDot } from 'react-icons/go'

const Footer = () => {
    return (
        <div className='app__footer'>
            <div className='app__footer-content'>

                <p>Marbella</p>
                <GoPrimitiveDot />
                <p>Panama City</p>
                <GoPrimitiveDot />
                <p>Panama</p>
                <GoPrimitiveDot />
                <p>Phone</p>
                <GoPrimitiveDot />
                <p> .......... </p>
                <GoPrimitiveDot />
                <p>example@email.com</p>
                <GoPrimitiveDot />
            </div>
            <div className='app__footer-copyright'>
                <p>@Copyright 2022 </p>
            </div>

        </div>
    )
}

export default Footer