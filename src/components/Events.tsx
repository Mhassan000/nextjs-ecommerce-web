import Image from 'next/image'
import React from 'react'
import event1 from '../../public/event1.webp'
import event2 from '../../public/event2.webp'
import event3 from '../../public/event3.webp'
const Events = () => {
  return (
    <div className='px-8 py-8 mx-auto mt-20  md:max-w-[92rem]  md:px-20  xl:px-28'>
        {/* Heading */}
        <div className='text-center space-y-4  mb-10    font-bold'>
            <p className='text-[#0062f5]'>PROMOTIONS</p>
            <h2 className='text-[#212121] text-3xl  '>Our Promotions Events</h2>
        </div>

        {/* Events banner */}
        <div className='flex lg:flex-row flex-col justify-between gap-10'>
            {/* Left Side */}
            <div className=' flex-auto   flex-col gap-2'>
                <div className='sm:flex-row flex flex-col justify-between  px-7 bg-[#d6d6d8] items-center'>
                    <div className='py-3 '>
                        <h1 className='text-[#212121] text-3xl font-bold '>GET UP TO 60%</h1>
                        <p>For the summer season</p>
                    </div>
                    <Image src ={event1} alt='' width={260} height={200}  />
                </div>
                <div className='flex mt-3 text-white px-7 py-10  flex-col justify-center items-center  bg-[#212121] '>
                        <h1 className='font-bold text-3xl mb-5'>GET 30% Off</h1>
                        <p className='text-xs sm:text-base'>USE PROMO CODE</p>
                        <button className='bg-[#474747] sm:text-base rounded-lg  text-xs px-4 py-1 tracking-widest  sm:tracking-[.35rem] mt-1 font-bold sm:px-8 sm:py-2'>DINEWEEKENDSALE</button>
                </div>

            </div>

            {/* Right Side */}
           
            <div className='flex  justify-between sm:flex-row flex-col items-stretch gap-3'>
                <div className='flex w-full  flex-col pt-1.5 justify-between items-center bg-[#efe1c7]'>
                    <div className='w-full text-sm pl-4 pt-2'>
                        <p>Flex Sweatshirt</p>
                        <div className='flex gap-x-2'>
                            <s>$100.00</s>
                            <p className='font-bold'>$75.00</p>
                        </div>
                    </div>
                    <Image className='pt-1.5 object-cover bg-cover ' src={event2} alt='' width={260} height={200} />

                </div>
                <div className='flex w-full  flex-col pt-1.5 justify-between items-center bg-[#d7d7d9]'>
                    <div className='w-full text-sm pl-4 pt-2'>
                        <p >Flex Push Button Bomber</p>
                        <div className='flex gap-x-2'>
                            <s>$225.00</s>
                            <p className='font-bold'>$190.00</p>
                        </div>
                    </div>
                    <Image className='pt-1.5 object-cover bg-cover ' src={event3} alt='' width={260} height={200} />

                </div>


            </div>
        </div>

    </div>
  )
}

export default Events