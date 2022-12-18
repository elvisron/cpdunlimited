import React from 'react'
import One from '../../images/1.png'
import Two from '../../images/2.jpeg'
import Three from '../../images/3.png'
import Four from '../../images/4.jpeg'
import Five from '../../images/5.png'
import Six from '../../images/6.png'

const TrustedPartners = () => {
  return (
    <div>
      <div class='pb-[50px] z-50'>
        <h2 class='mx-auto  max-w-2xl text-[35px] font-bold tracking-tight text-slate-700 text-center'>
          Trusted Partners
        </h2>

        <ul class='mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'>
          <li>
            <ul class='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'>
              <li class='flex'>
                <img
                  alt='Transistor'
                  src={One}
                  width='158'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Tuple'
                  src={Two}
                  width='105'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='StaticKit'
                  src={Three}
                  width='127'
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
                  alt='Mirage'
                  src={Four}
                  width='138'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Laravel'
                  src={Five}
                  width='136'
                  height='48'
                  style={{ color: 'transparent' }}
                />
              </li>
              <li class='flex'>
                <img
                  alt='Statamic'
                  src={Six}
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
