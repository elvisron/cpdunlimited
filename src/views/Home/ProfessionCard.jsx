import React from 'react'

const ProfessionCard = ({ link }) => {
  return (
    <div className='flex flex-col justify-center  '>
      <div className='group  [perspective:1000px]'>
        <div className='relative max-w-[430px] bg-[rgba(250,250,250,0.8)] duration-500 mx-auto transition-all group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]  border  min-h-[60px] rounded-md pt-1'>
          <div className='absolute insert-0  p-6  w-full h-full  flex items-center justify-center  [backface-visibility:hidden]'>
            <h5 class='mb-2 text-xl font-bold tracking-tight   text-slate-900 text-center'>
              {link.title}
            </h5>
          </div>

          <div className='absolute insert-0 h-full w-full p-6 bg-white border  [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-md'>
            <div className='flex items-center justify-center h-full w-full'>
              <a
                href={link.explore}
                className=' px-3 rounded bg-slate-100 cursor-pointer text-sm text-center ml-2 '
              >
                Explore
              </a>
              <a
                href={link.signin}
                className=' px-3 rounded bg-slate-100 cursor-pointer text-sm text-center ml-2 '
              >
                Login
              </a>
              <a
                href={link.signup}
                className=' px-3 rounded bg-slate-100 cursor-pointer text-sm text-center ml-2 '
              >
                SignUp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionCard
