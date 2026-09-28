import React from 'react'
import Hero from '../components/home/Hero'
import ShopByCategory from '../components/home/ShopByCategory'
import FeaturedCollection from '../components/home/FeaturedCollection'
import SpecialOffer from '../components/home/SpecialOffer'


const Home = () => {
  return (
    <div>
    <Hero/>
    <ShopByCategory/>
    <FeaturedCollection/>
    <SpecialOffer/>
    </div>
  )
}

export default Home