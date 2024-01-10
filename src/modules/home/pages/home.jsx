import React from 'react'
import Carosel from '../components/carosel/carosel'
import Services from '../components/services/services'
import Statics from '../components/statics/statics'
import Pricing from '../components/Pricing/pricing'
import Testimonial from '../components/testimonial/testimonial'
import Company from '../components/Company/company'

const Home = () => {
  return (
    <>
       <Carosel />
       <Services />
       <Statics />
       <Pricing />
       <Testimonial />
       <Company />
    </>
  )
}

export default Home
