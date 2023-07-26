'use client'
import { useState } from 'react';
import { BiCart } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const AddToCart =  ({productId ,price,name} :{productId:string, price:number, name: string}) => {
  
  
  const [quantity, setQuantity] = useState(1)
    const handleIncrement =  () => {
        setQuantity(quantity + 1)
      }
      const handleDecrement =  () => {
        setQuantity((quantity> 1 ? quantity - 1 : 1))
    }

    const handleAddtoCart = async ()=>{
        const res = await fetch (`${baseUrl}/api/cart` ,{
          method: 'POST',
          body: JSON.stringify({
            product_id: productId,
            Quantity: quantity
          })
        })     
        const result = await res.json()
        console.log('result: ',result)
      }
      const notify = (quantity:number) => toast.promise(
        handleAddtoCart(),{
          loading:'Adding..',
          success: <b>{`${quantity} ${name} added to cart `}</b>,
          error: <b>Not Added</b>
        }
      )
    

  return (
    <>
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

      <div className='flex items-center gap-5 '>
                
        <button onClick={()=>notify(quantity)} className='bg-black flex items-center text-sm  gap-1 py-2 px-6 text-white border-slate-500 border-t-2 border-l-2 font-semibold'>
            <span><BiCart fontSize={25}/></span>
            Add to Cart
        </button>
        <Toaster/>
        <p className='text-2xl font-semibold'>${price * quantity}.00</p>
      </div>
    </>
  )
}

export default AddToCart