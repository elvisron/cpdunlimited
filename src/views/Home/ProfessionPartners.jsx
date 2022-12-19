import React from 'react'
import One from '../../images/1.png'
import Two from '../../images/2.jpeg'
import Three from '../../images/3.png'
import Four from '../../images/4.jpeg'
import Five from '../../images/5.png'
import Six from '../../images/6.png'

const ProfessionPartners  = () => {
  return (
    <div class="pb-16" style="font-family: 'Lato', sans-serif">
            <dh-component>
                <div class="container mx-auto pt-16">
                    <div class="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                        <h1 tabindex="0" class="focus:outline-none xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">Partnerships with Coveted Brands</h1>
                        <p tabindex="0" class="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">Our success has come from being committed to the property and investing in the development of the product to maximize sales. At the same time and maintaining the integrity.</p>
                    </div>
                    <div class="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                            <img tabindex="0" class="focus:outline-none" src={One} alt="Adidas" role="img" />
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                            <img tabindex="0" class="focus:outline-none" src={Two} alt="Chanel" role="img" />
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                            <img tabindex="0" class="focus:outline-none" src={Three} alt="Nike" role="img" />
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                            <img tabindex="0" class="focus:outline-none" src={Four} alt="Toyota" role="img" />
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                            <img tabindex="0" class="focus:outline-none" src={Five} alt="GS1" role="img" />
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                            <img tabindex="0" class="focus:outline-none" src={Five} alt="BlackBerry" role="img" />
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                            <img tabindex="0" class="focus:outline-none" src={Six} alt="Mini" role="img" />
                        </div>
                    </div>
                </div>
            </dh-component>
            </div>
  )
}

export default ProfessionPartners
