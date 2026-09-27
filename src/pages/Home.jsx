import React from 'react'
import Hero from '../components/home/Hero'
import ShopByCategory from '../components/home/ShopByCategory'
import FeaturedCollection from '../components/home/FeaturedCollection'


const Home = () => {
  return (
    <div>
    <Hero/>
    <ShopByCategory/>
    <FeaturedCollection/>
    </div>
  )
}

export default Home