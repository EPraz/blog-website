import React from 'react'
import ArticlesSlider from './ArticlesSlider/ArticlesSlider'
import SimpleSlider from './slider/SimpleSlider'
import './Homepage.css'
import ArticlesBottom from './ArticlesBottom/ArticlesBottom'

const Homepage = () => {
  return (
    <div className='app__homepage'>
        <SimpleSlider />
        <ArticlesSlider />
        <ArticlesBottom />
    </div>
  )
}

export default Homepage