import React from 'react'
import { client } from '@/lib/sanityClient'
import ProductCard from '@/components/ProductCard';
import { IFProduct } from '../../../../types';
 

export async function generateStaticParams() {

  const categories: string[] = ['Female','Male','Kids']
  return categories.map((category)=> ({
    category : category
  }
  ))
}
  


const getProducts  = async (category:string)=>{
  const res = await client.fetch (`*[_type == "product" &&  category->name == "${category}"]{
    slug{
      current
    },
    name,
    ptype,
    _id,
    image,
    price
  }`);
  return res
}

export const dynamic = "force-static";

export default async function Page({ params }: { params: { category: string } }) {
  const {category} = params
  const data:IFProduct[] = await getProducts(category)
  
  return (
    <div className='max-w-[92rem] mx-auto  grid px-8 py-8 md:px-20 lg:px-28 sm:grid-cols-2 lg:grid-cols-3 sm:justify-between justify-center items-center xl:grid-cols-4 gap-10'>

      {data.map((item,index)=>{
        return (
          <ProductCard item={item} key={index} />
        )
      })}
    
    </div>
  )
}

