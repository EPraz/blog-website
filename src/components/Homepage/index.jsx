import React from 'react'
import ArticlesSlider from './ArticlesSlider/ArticlesSlider'
import SimpleSlider from './slider/SimpleSlider'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='app__homepage'>
        <SimpleSlider />
        <ArticlesSlider />
    </div>
  )
}

export default Homepage