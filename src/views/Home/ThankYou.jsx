import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function ThankYou() {
  // const words = [
  //   { title: 'Medical Doctors & PAs', url: 'https://medic.cpdunlimited.com/' },
  //   {
  //     title: 'Nurses & Midwives',
  //     url: 'https://nurse.cpdunlimited.com/',
  //   },
  //   { title: 'Pharmacists', url: 'https://app.cpdunlimited.com/' },
  //   { title: 'Allied Health', url: '/#' },
  // ]

  return (
    <div>
      <h1 class='text-4xl relative font-bold tracking-tight sm:text-left sm:text-4xl inline mb-5 w-[50%]'>
        Thank You for being with us through covid
        <span className='text-[#21ba45] inline underline ml-5'>
          <Typewriter
            words={['Medical Doctors & PAs', 'Nurses & Midwives', 'Pharmacists', 'Allied Health']}
            loop={true}
          />
        </span>
      </h1>
    </div>
  )
}
