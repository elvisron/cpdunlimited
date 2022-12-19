import React from 'react'
import BG from '../../images/bg.jpg'
import ProfessionCard from './ProfessionCard'
import arrow from '../../images/down-arrow.svg'
import heroimage from '../../images/heroimage.png'

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
      <div class='absolute inset-x-0 -top-48 -bottom-1 overflow-hidden bg-indigo-50'>
          <img
            alt=''
            src={BG}
            width='918'
            height='600'
            class='absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]'
            style={{ color: 'transparent' }}
          />
          <div class='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white'></div>
          <div class='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white'></div>
        </div>
       <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-6xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          
          <div class="hidden sm:mb-8 sm:flex sm:justify-left">
            <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span class="text-gray-600">
                Welcome to CPD Unlimited. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
              </span>
            </div>
          </div>
          

          <div>
            <div class='max-w-6xl md:mx-auto md:grid-cols-2 grid gap-8'>
              <h1 class="text-4xl font-bold tracking-tight sm:text-left sm:text-5xl">100% online quality CPD educational platform in Africa and beyond.</h1>
              <img class='mx-auto object-center w-150 h-80' alt='Transistor' src={heroimage} />
            </div>
           
            <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center p-6 ">Select your professional path below</p>

              <section class="hero container max-w-screen-lg mx-auto pb-10">
                <img class='mx-auto object-center animate-bounce w-6 h-6' alt='Transistor' src={arrow} />
              </section>
            
            
          <div className='max-w-6xl md:mx-auto md:grid-cols-4 grid gap-4  '>
                {links.map((link, index) => (
                  <ProfessionCard link={link} key={index} />
                ))}
              </div>
          </div>
          
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
