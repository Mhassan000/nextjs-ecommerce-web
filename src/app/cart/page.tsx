'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import React from 'react'

export interface ICProduct {
    
    product_id: string
    Quantity: number
  }


const getCartItems =  async ()=>{
  const res = await fetch ('http://localhost:3000/api/cart' ,{
    method: 'GET',
  })
  const result = await res.json()
  return result
}


const Cart =  () => {
  // const data  =  await getCartItems()
  const [cart, setCart] = useState([]);

  const fetchCartItems = async () => {
    const cartItems = await getCartItems();
    setCart(cartItems.res);
    
  };


  
  useEffect(() => {

    fetchCartItems();
    
  }, []);
  // if (cart.length == 0) {
  //   return <div>Loading...</div>;
  // }
  
  console.log( 'cart',cart)

  return (
    
    <div className='px-8  py-8 mx-auto  md:max-w-[92rem]  md:px-20  xl:px-28'>
        <h1>Shopping Cart</h1>
        {cart.map((item:ICProduct,index)=>(
          <div key={index} className='flex flex-col'>
            <p>{item.Quantity}</p>
            <p>{item.product_id}</p>
            
          </div>
        ))}

    </div>
  )
}

export default Cart