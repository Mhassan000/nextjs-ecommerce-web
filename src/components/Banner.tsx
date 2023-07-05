import Link from 'next/link'
import React from 'react'
import { BiCart } from 'react-icons/bi';
import Image from 'next/image';
const Banner = () => {
  return (
    <div className='max-w-[92rem] relative mx-auto  flex justify-between  px-8 py-8 mt-0 lgu:mt-5   md:px-20 xl:px-28'>
        

            {/* Left Side */}
            <div className='flex w-full lg:w-auto lg:mt-12  flex-col gap-10 '>
                <p className='text-blue-700 font-semibold bg-[#e1edff] self-start px-5 py-2 rounded' >Sale 70%</p>
                <h2 className='font-bold text-4xl  md:text-6xl lg:mr-20 xl:mr-40  leading-tight '>An Industrial Take on Streetwear</h2>
                <p className='text-[#666] lg:mr-32 xl:mr-60 '>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <div className='flex items-center'>
                    <Link className='flex bg-black text-white p-3 gap-2 items-center' href={'#'}>
                        <span><BiCart fontSize={30} /></span>
                        Start Shopping
                    </Link>
                </div>
                
                {/* Icons */}
                <div className='flex flex-wrap  justify-between  gap-4 '>
                        <Image src={'/Featured1.webp'}  alt='' width={120} height={0} />
                        <Image src={'/Featured2.webp'}  alt='' width={120} height={0} />
                        <Image src={'/Featured3.webp'}  alt='' width={120} height={0} />
                        <Image src={'/Featured4.webp'}  alt='' width={120} height={0} />

                </div>

            </div>

            {/* Right Side Image */}
            {/* <div className=" justify-center hidden  relative   lg:flex gap-3     ">
                  <Image className=' object-cover bg-cover absolute  -top-7 w-full h-auto  '  src={'/BannerImage.webp'} sizes='100vw' alt='' width={0} height={0} />
              <div className='bg-[#ffece3] rounded-full w-[500px] h-[500px]'>
              </div>
            </div> */}
            <div className=" hidden lgu:flex gap-3  justify-center    ">
              <div className='bg-[#ffece3] flex items-center justify-center rounded-full  w-[600px] h-[600px]'>
                  <Image className=' absolute -top-5 '  src={'/BannerImage.webp'}  alt='' width={700} height={700} />
              </div>
            </div>
            
        
    </div>
  )
}

export default Banner