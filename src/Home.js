import React from 'react'
import Nav from './Component/nav'
import Main from './Component/Main'
import Featured from './Component/FeaturedProduct'
import Services from './Component/services'
import Trusted from './Component/trusted'
import Footer from './Component/Footer'



function Home() {
  return (
    <div>
      
      <Nav />
      <Main name="Ecommerce" />
      <Featured/>
      <Services/>
      <Trusted />
      <Footer />
      
    </div>
  )
}

export default Home
