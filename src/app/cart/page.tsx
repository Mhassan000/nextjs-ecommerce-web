import Image from 'next/image'
import React from 'react'
import { client } from '@/lib/sanityClient'
import { urlForImage } from '../../../sanity/lib/image';
import { cookies } from 'next/headers';
import { IFProduct } from '../../../types';

export interface ICProduct {
    
    product_id: string
    Quantity: number
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const getCartItems =  async ()=>{
  const user_id = cookies().get('user_id')?.value
  const res = await fetch (`${baseUrl}/api/cart?user_id=${user_id}` ,{
    cache:'no-store'
  })
  const result = await res.json()
  return result
  }



  const getProductItems = async ()=>{

    try{
      const cartItems:ICProduct[]  =  await getCartItems()
      const productItems:IFProduct[] =  [];

      for ( const cartItem of cartItems ){
        const res = await client.fetch(`*[_type == "product" && _id == '${cartItem.product_id}' ] {
          name,
          ptype,
          _id,
          image,
          price  
        }`)
        if( res.length > 0 ){
          productItems.push(res[0])
        }

        }
        return productItems
      }
    
    catch(err){
      console.log('Error fetching product items',err)
      return []
    }
  }


const Cart = async  () => {
  const productItems:IFProduct[] = await getProductItems()
  console.log('productItems',productItems)

  return (
    
    <div className='px-8  py-8 mx-auto  md:max-w-[92rem]  md:px-20  xl:px-28'>
        <h1 className='text-[black] font-bold text-2xl'>Shopping Cart</h1>
        <div>

        </div>
        {productItems.map((item,index)=>(
          <div key={index} className='flex gap-x-2'>
           
            <div >
              <Image className='rounded-xl'
              src={urlForImage(item.image[0] as any) as string}
              alt=""
              width={200}
              height={200}
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <h1>{item.name}</h1>
              <p>{item.ptype}</p>
              <p>Delivery Estimation</p>
              <p>5 Working Days</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}

    </div>
  )
}

export default Cart