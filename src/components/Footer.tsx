import React from 'react'
import logo from '../../public/Logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'
const Footer = () => {
  return (
    <footer>
      <div className='px-8  py-8 mx-auto mt-20  md:max-w-[92rem]  md:px-20  xl:px-28'>
        <div className='w-full py-12  mx-auto  lg:space-y-12 '>
          <div className='grid grid-cols-1 sm:grid-cols-[1fr,1fr]  lg:grid-cols-[2fr,1fr,1fr,1fr] gap-8 lg:gap-5'>
          {/* First Column */}
            <div className='flex  flex-col gap-5'>

              {/* Logo */}
              <Image src={logo} width={180} alt='logo' />
              <p className='text-[#666]'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>

              {/* Icons */}
              <div className='flex items-center  gap-5'>
                <Link href={'#'} className='bg-[#f1f1f1] py-3 px-3 rounded-xl'><GrTwitter size={25}/></Link>
                <Link href={'#'} className='bg-[#f1f1f1] py-3 px-3 rounded-xl'><GrFacebookOption size={25}/></Link>
                <Link href={'#'} className='bg-[#f1f1f1] py-3 px-3 rounded-xl'><GrLinkedinOption size={25}/></Link>
                
              </div>

            </div>

            {/* Second Column */}
            <div className='flex lg:px-10 flex-col text-[#666] gap-5 '>
              <h1 className=' font-bold text-xl'>Company</h1>
              <ul className='font-normal space-y-4'>
                <li>
                  <Link href={'#'}>About </Link>
                </li>
                <li>
                  <Link href={'#'}>Terms of Use </Link>
                </li>
                <li>
                  <Link href={'#'}>Privacy Policy </Link>
                </li>
                <li>
                  <Link href={'#'}>How it Works </Link>
                </li>
                <li>
                  <Link href={'#'}>Contact Us </Link>
                </li>
              </ul>
            </div>

            {/* Third Column */}
            <div className='flex  flex-col text-[#666] gap-5 '>
              <h1 className=' font-bold text-xl'>Quick Links</h1>
              <ul className='font-normal space-y-4'>
                <li>
                  <Link href={'#'}>Home</Link>
                </li>
                <li>
                  <Link href={'#'}>Female</Link>
                </li>
                <li>
                  <Link href={'#'}>Male</Link>
                </li>
                <li>
                  <Link href={'#'}>All Products</Link>
                </li>
              </ul>
            </div>

            {/* Fourth Column */}
            <div className='flex lg:px-10 flex-col text-[#666] gap-5 '>
              <h1 className=' font-bold text-xl'>Contact</h1>
              <ul className='font-normal space-y-4'>
                <li>
                  <Link href={'#'}>WhatsApp</Link>
                </li>
                <li>
                  <Link href={'#'}>Support 24h</Link>
                </li>
              </ul>
            </div>

          </div>
    
        </div>
      </div>

      {/* Bottom */}
      <div className='border-t  border-gray-400 md:max-w-[92rem] mx-auto drop-shadow-sm '>
        <div className='flex sm:flex-row flex-col  gap-2 items-center sm:justify-between px-8  py-8 md:px-20  xl:px-28 '>
        <p className=' text-[#666]'>Copyright &copy; 2023 Dine Market </p>
        <p className='flex gap-1'>Github:<span><Link className='text-[#666] font-bold' href={'https://github.com/Mhassan000'} target='blank'> Mhassan000</Link></span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer