import React, { useState } from 'react'
import logo from '../images/cpd2.png'
import MenuItem from './MenuItem'
import { BiMenu } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'

const mainLinks = [
  { title: 'Medical Doctors & PAs', url: 'https://medic.cpdunlimited.com/' },
  {
    title: 'Nurses & Midwives',
    url: 'https://nurse.cpdunlimited.com/',
  },
  { title: 'Pharmacists', url: 'https://app.cpdunlimited.com/' },
  { title: 'Allied Health', url: '/#' },
]

const registrationLinks = [
  {
    title: 'Login',
    subLinks: [
      {
        title: 'Medical Doctors & PAs',
        url: 'https://medic.cpdunlimited.com/login',
      },
      {
        title: 'Nurses & Midwives',
        url: 'https://nurse.cpdunlimited.com/login',
      },
      { title: 'Pharmacists', url: 'https://app.cpdunlimited.com/login' },
      {
        title: 'Allied Health',
        url: '/#',
      },
    ],
  },
  {
    title: 'Create Account',
    subLinks: [
      {
        title: 'Medical Doctors & PAs',
        url: 'https://medic.cpdunlimited.com/signup',
      },
      {
        title: 'Nurses & Midwives',
        url: 'https://nurse.cpdunlimited.com/signup',
      },
      { title: 'Pharmacists', url: 'https://app.cpdunlimited.com/signup' },
      {
        title: 'Allied Health',
        url: '/#',
      },
    ],
  },
]

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <header class='fixed top-0 w-full clearNav z-50  bg-white shadow-lg  hover:shadow-lg'>
      <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
        <nav className='relative z-50 flex justify-between'>
          <div className='flex  md:gap-x-12 items-center  p-3 md:p-1'>
            <a
              href={'/'}
              class='flex text-3xl text-slate-900 font-medium mb-4 md:mb-0'
            >
              <img src={logo} alt='logo' className=' w-[100px]' />
            </a>

            <div class='hidden lg:flex  font-4 pt-1 md:pl-10 pl-1   flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start'>
              {mainLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  class='mx-2  cursor-pointer text-slate-700 text-sm hover:text-gray-500 font-semibold '
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div className={'hidden  lg:flex items-center gap-x-5 md:gap-x-8 '}>
            {registrationLinks.map((link, index) => (
              <MenuItem key={index} link={link} />
            ))}
          </div>
          <div className={'flex  lg:hidden items-center gap-x-5 md:gap-x-8'}>
            {!openMobileMenu && (
              <BiMenu
                onClick={() => setOpenMobileMenu(true)}
                className='text-2xl'
              />
            )}
            {openMobileMenu && (
              <GrClose
                onClick={() => setOpenMobileMenu(false)}
                className='text-2xl'
              />
            )}
          </div>

          <div
            class={`${
              openMobileMenu ? 'block' : 'hidden'
            } lg:hidden absolute inset-x-0 top-[120px] mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 scale-100`}
            id='headlessui-popover-panel-:R1p6H1:'
            tabindex='-1'
            data-headlessui-state='open'
          >
            <ul>
              {mainLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  class='mx-4 cursor-pointer text-slate-700 text-sm hover:text-gray-500 font-semibold '
                >
                  <li
                    className={
                      'flex w-full items-center gap-2 font-medium   px-3'
                    }
                  >
                    {link.title}
                  </li>
                </a>
              ))}
            </ul>

            <hr class='m-2 border-slate-300/40' />
            <a
              href={'/'}
              class='mx-4 cursor-pointer text-slate-700 text-sm hover:text-gray-500 font-semibold '
            >
              <li
                className={'flex w-full items-center gap-2 font-medium   px-3 '}
              >
                Login
              </li>
            </a>
            <a
              href={'/'}
              class='mx-4 cursor-pointer text-slate-700 text-sm hover:text-gray-500 font-semibold '
            >
              <li
                className={'flex w-full items-center gap-2 font-medium   px-3 '}
              >
                Register
              </li>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
