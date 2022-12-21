import React from 'react'
import One from '../../images/1.png'
import Two from '../../images/2.jpeg'
import Three from '../../images/3.png'
import Four from '../../images/4.png'
import Five from '../../images/5.png'
import Six from '../../images/6.png'
import Seven from '../../images/7.jpeg'
import Eight from '../../images/8.png'

const TrustedPartners = () => {
  return (
    <div>
      <div class='pb-[50px] z-50'>
        <h2 class='mx-auto  max-w-2xl text-[35px] font-bold tracking-tight text-slate-700 text-center'>
          Accreditation & Partnership
        </h2>

        <ul class='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'>
          <li>
            <ul class='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'>
              <li class='flex'>
                <img
                  alt='Partners'
                  src={Eight}
                  width='158'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Partners'
                  src={Seven}
                  width='105'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Partners'
                  src={Six}
                  width='127'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Partners'
                  src={Two}
                  width='138'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
            </ul>
          </li>
          <li>
            <ul class='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'>
              <li class='flex'>
                <img
                  alt='Partners'
                  src={Four}
                  width='136'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Partners'
                  src={Five}
                  width='147'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Partners'
                  src={One}
                  width='147'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Partners'
                  src={Three}
                  width='147'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TrustedPartners
