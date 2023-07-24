import Image from 'next/image'
import React from 'react'
import { client } from '@/lib/sanityClient'

import { cookies } from 'next/headers';
import { IFProduct } from '../../../types';

export interface ICProduct {
    
    product_id: string
    Quantity: number
}


const getCartItems =  async ()=>{
  const user_id = cookies().get('user_id')?.value
  const res = await fetch (`http://localhost:3000/api/cart?user_id=${user_id}` ,{
    method: 'GET',
  })
  const result = await res.json()
  return result
  }





const Cart = async  () => {
  
  // console.log('data',data)
  
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

  
  
  const productItems:IFProduct[] = await getProductItems()
  console.log('productItems',productItems)
  return (
    
    <div className='px-8  py-8 mx-auto  md:max-w-[92rem]  md:px-20  xl:px-28'>
        <h1>Shopping Cart</h1>
        {productItems.map((item,index)=>(
          <div key={index} className='flex flex-col'>
           
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.ptype}</p>
            
          </div>
        ))}

    </div>
  )
}

export default Cart