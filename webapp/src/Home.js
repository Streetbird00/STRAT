import React from 'react'
import "./Home.css"
import Carousel from './Carousel'
import TopProperties from './TopProperties'
import Booking from './Booking'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <TopProperties/>
      <Booking/>
    </div>
  )
}

export default Home
