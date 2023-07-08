import React from 'react'

const Newsletter = () => {
  return (
    <div className='px-8  py-8 mx-auto mt-20  md:max-w-[92rem]  md:px-20  xl:px-28'>

        <div className="flex relative flex-col items-center justify-center gap-5">
            <h1 className="text-4xl  font-bold text-center">Subscribe Our Newsletter</h1>
            <p>Get the latest information and promo offers directly</p>
            <div className='flex justify-center items-center flex-col sm:flex-row max-w-[28rem] sm:w-full gap-2'>
                <input className='border-gray-500 h-[38px] sm:flex-grow border px-4 outline-none bg-white ' type="email" placeholder='Enter email address' />
                <button className='bg-black mx-auto py-2 px-8 text-white border-slate-500 border-t-2 border-l-2 font-semibold'>Get Started</button>
            </div>
            <div className="absolute -z-10  inset-0 flex items-center justify-center">
                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-[#f2f3f7]">Newsletter</span>
            </div>
        </div>
    </div>
  )
}

export default Newsletter