import React from 'react'
import Categories from './Categories'
import SlideHome from './Slider'
import "./Home.css"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SlideHome />
        </div>
      </section>
    </>
  )
}

export default Home