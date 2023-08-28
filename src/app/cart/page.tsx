'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { client } from '@/lib/sanityClient'
import { urlForImage } from '../../../sanity/lib/image';
import { IFProduct } from '../../../types';
import {AiOutlineShopping} from 'react-icons/ai'
import { useAuth } from '@clerk/nextjs';

export interface ICProduct {
    product_id: string
    Quantity: number
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL


const GetCartItems =  async (userId: string | null | undefined)=>{
  console.log('---User ID:',userId)
  try{
    const res = await fetch (`${baseUrl}/api/cart?user_id=${userId}`,{
      method: 'GET',
    })
    const result = await res.json()
    return result
  }
  catch(err){
    console.log('Error fetching cart items',err)
  }
  }

  

const getProductItems = async (userId: string | null | undefined)=>{

  try{
    const cartItems:ICProduct[]  =  await GetCartItems(userId)
    const productItems: ( IFProduct & { quantity: number})[] =  [];

    for ( const cartItem of cartItems ){
      const res = await client.fetch(`*[_type == "product" && _id == '${cartItem.product_id}' ] {
        name,
        ptype,
        _id,
        image,
        price  
      }`)

      if (res.length > 0) {
        const existingProductIndex = productItems.findIndex(item => item._id === cartItem.product_id);
        
        if (existingProductIndex !== -1) {
          // Product already exists in the cart, update the quantity
          productItems[existingProductIndex].quantity += cartItem.Quantity;
        } else {
          // Product doesn't exist in the cart, add it
          productItems.push({
            ...res[0],
            quantity: cartItem.Quantity,
          });
        }
      }

      }
      return productItems
    }
  
  catch(err){
    console.log('Error fetching product items',err)
    return []
  }
  }


  const Cart = () => {
    const {userId} = useAuth()
    // console.log(typeof userId)
    const [productItems, setProductItems] = useState< (IFProduct & {quantity: number})[]>([]);

    useEffect(() => {
      async function fetchProductItems() {
        const items: (IFProduct & {quantity: number})[] = await getProductItems(userId);
        setProductItems(items);
      }
  
      fetchProductItems();
    }, [userId]);
    console.log('productItems',productItems)


    // User not logged in
    if(!userId) return (
      <div className='px-8 py-8 mx-auto md:max-w-[92rem] md:px-20 xl:px-32'>
        <h1 className='text-[black] font-bold text-2xl'>Shopping Cart</h1>
        <div className='flex items-center  flex-col gap-y-1 mt-10'>
          <AiOutlineShopping fontSize={150} />
          <h1 className='text-[black] font-bold text-2xl'>Please login to view your cart</h1>
        </div>
      </div>
    )
  
    
    return (
      <div className='px-8 py-8 mx-auto md:max-w-[92rem] md:px-20 xl:px-32'>
        <h1 className='text-[black] font-bold text-2xl'>Shopping Cart</h1>
        <div>
          {productItems.length === 0 ? (
            <div className='flex items-center  flex-col gap-y-1 mt-10'>
              <AiOutlineShopping fontSize={150} />
              <h1 className='text-[black] font-bold text-2xl'>Your shopping bag is empty</h1>
            </div>
          ) : (
            productItems.map((item, index) => (
              <div key={index} className='flex flex-col sm:flex-row gap-x-8'>
                <div>
                  <Image
                    className='rounded-xl object-contain '
                    src={urlForImage(item.image[0] as any) as string}
                    alt=''
                    width={180}
                    height={180}
                  />
                </div>
                <div className='flex flex-col font-semibold gap-y-5'>
                  <h2 className='text-[#212121] font-medium'>{item.name}</h2>
                  <p className='text-[#666]'>{item.ptype}</p>
                  <p className='text-[#212121]'>Delivery Estimation</p>
                  <p className='text-[#ffc700]'>5 Working Days</p>
                  <p className='text-lg'>${item.price}</p>
                  <p className='text-[#666]'>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default Cart;
  