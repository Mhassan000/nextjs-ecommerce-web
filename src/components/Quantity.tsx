'use client'
import React from 'react'


const Quantity = () => {
    const [quantity, setQuantity] = React.useState(1)
    const handleIncrement =  () => {
        setQuantity(quantity + 1)
      }
      const handleDecrement =  () => {
        setQuantity((quantity> 1 ? quantity - 1 : 1))
      }
  return (
    <div className='flex items-center gap-4'>
        <p className='font-semibold'>QUANTITY:</p>
        <div className='flex items-center gap-4'>
          <div className='w-8 h-8 bg-[#f1f1f1] border-[#f1f1f1] border rounded-full   shadow-white text-lg cursor-pointer font-semibold  flex justify-center items-center'
          onClick={handleDecrement}
          >-</div>
          <div className=' text-[#666] font-semibold '>{quantity}</div>
          <div className='w-8 h-8 border border-black rounded-full  text-lg cursor-pointer font-semibold  flex justify-center items-center'
          onClick={handleIncrement}
          >+</div>
        </div>
      </div>
  )
}

export default Quantity