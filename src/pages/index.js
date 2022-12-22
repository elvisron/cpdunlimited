import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Seo } from '../components/Seo'
import Hero from '../views/Home/Hero'
import TrustedPartners from '../views/Home/TrustedPartners'

const IndexPage = () => {
  return (
    <main>
      <div>
        <Header />
        <Hero />
      </div>

      <TrustedPartners />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo title='CPDUnlimited' />
