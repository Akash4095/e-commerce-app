import React from 'react'
import Categories from './Categories'
import SlideCard from './SliderCard'
import "./Home.css"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default Home