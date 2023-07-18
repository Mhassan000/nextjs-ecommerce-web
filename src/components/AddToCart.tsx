'use client'
import { BiCart } from 'react-icons/bi';

const AddToCart =  ({productId} :{productId:string}) => {
    const handleAddtoCart = async ()=>{
        const res = await fetch ('/api/cart' ,{
          method: 'POST',
          body: JSON.stringify({
            product_id: productId
          })
        })     
        const result = await res.json()
        console.log('result: ',result)
    }

    

  return (
    <button onClick={handleAddtoCart} className='bg-black flex items-center text-sm  gap-1 py-2 px-6 text-white border-slate-500 border-t-2 border-l-2 font-semibold'>
        <span><BiCart fontSize={25}/></span>
        Add to Cart
    </button>
    
  )
}

export default AddToCart