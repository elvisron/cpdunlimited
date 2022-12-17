import React from 'react'
import BG from '../../images/bg.jpg'
import ProfessionCard from './ProfessionCard'

const links = [
  {
    title: 'Allied Sciences',
    explore: 'https://allied.cpdunlimited.com/',
    signin: 'https://allied.cpdunlimited.com/signin',
    signup: 'https://allied.cpdunlimited.com/signup',
  },
  {
    title: 'Medical Doctors & PAs',
    explore: 'https://medic.cpdunlimited.com/',
    signin: 'https://medic.cpdunlimited.com/signin',
    signup: 'https://medic.cpdunlimited.com/signup',
  },
  {
    title: 'Nurses & Midwives',
    explore: 'https://nurse.cpdunlimited.com/',
    signin: 'https://nurse.cpdunlimited.com/signin',
    signup: 'https://nurse.cpdunlimited.com/signup',
  },
  {
    title: 'Pharmacists',
    explore: 'https://app.cpdunlimited.com/',
    signin: 'https://app.cpdunlimited.com/signin',
    signup: 'https://app.cpdunlimited.com/signup',
  },
]

export default function Hero() {
  return (
    <section class='text-gray-600 body-font'>
      <div class='relative pt-10 pb-20 sm:py-24'>
        <div class='absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50'>
          <img
            alt=''
            src={BG}
            width='918'
            height='1495'
            class='absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]'
            style={{ color: 'transparent' }}
          />
          <div class='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white'></div>
          <div class='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white'></div>
        </div>

        <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
          <div class='mx-auto  lg:px-12'>
            <div class='max-w-5xl   pb-24 mx-auto '>
              <h1 class='mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl text-center'>
                Welcome to CPD unlimited Learning Platform
              </h1>
              <h2 class='mx-auto my-5 max-w-2xl text-lg tracking-tight text-slate-700 text-center'>
                select your profession to proceed
              </h2>

              <div className='max-w-2xl md:mx-auto md:grid-cols-2 grid gap-5  '>
                {links.map((link, index) => (
                  <ProfessionCard link={link} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
