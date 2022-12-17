import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const MenuItem = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className=' relative flex cursor-pointer items-center   py-3 transition-all duration-[3000ms] ease-in-out'
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => void 0}
    >
      <div>
        <button
          className={`${
            link.title === 'Login' ? 'btn-l-l ' : 'btn-r-r '
          }  flex items-center justify-between`}
        >
          {link.title}
          <BsChevronDown />
        </button>

        {isHovered && (
          <div className='absolute top-35 right-[-10px] bg-indigo-50'>
            <ul
              className={
                ' min-w-[200px] shadow-md bg-indigo-50 rounded pt-1 text-[#070b16]  p-3 transition-all duration-[2000ms] ease-in-out '
              }
            >
              {link.subLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  class='mx-4 cursor-pointer text-slate-700 text-sm hover:text-gray-500 font-semibold '
                >
                  <li
                    className={
                      'flex w-full items-center gap-2 font-medium   px-3 '
                    }
                  >
                    {item.title}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuItem
