import * as React from 'react'
import Header from '../components/Header'
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
      <Header />
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo title='CPDUnlimited' />
