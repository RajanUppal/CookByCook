import React from 'react'
import Header from '../component/Header'
import OurServices from '../component/Our_Services'
import Service from '../component/Service'
import Our_Chefs from '../component/Our_Chefs'
import Review from '../component/Reviews'
import WhatWeOffer from '../component/WhatWeOffer'
import Gallery from '../component/Gallery'
import ScrollToTopButton from '../component/ScrollToTopButton'

const Home = () => {
  return (
    <div>
        <Header />
        <OurServices />
        <Service />
        <Our_Chefs/>
        <Review/>
        <WhatWeOffer/>
        <Gallery/>
        <ScrollToTopButton />
    </div>
  )
}

export default Home