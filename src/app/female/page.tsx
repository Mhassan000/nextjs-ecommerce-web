import React from 'react'
import { client } from '@/lib/sanityClient'
import { Image as IImage, Slug } from "sanity";
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
 
const getFemaleProducts  = async ()=>{
  const res = await client.fetch (`*[_type == "product" &&  category->name == "Female"]{
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
interface IFProduct {
  name: string
  ptype: string
  image: IImage
  price: number
  _id: string
  slug: Slug
}


const page  = async () => {
  const data:IFProduct[] = await getFemaleProducts()
  
  return (
    <div className='max-w-[92rem] mx-auto  grid px-8 py-8 md:px-20 lg:px-28 sm:grid-cols-2 lg:grid-cols-3 sm:justify-between justify-center items-center xl:grid-cols-4 gap-10'>

      {data.map((item,index)=>{
        const imageUrl = Array.isArray(item.image)
        ? urlForImage(item.image[0]) // Assuming you want to display the first image in the array
        : urlForImage(item.image);

        return (
          
          <div key={index} className='flex mx-auto max-w-[250px] flex-col  '>
            <Link href={`/product/${item.slug.current}`}>
            <Image
              src={imageUrl as string}
              alt=""
              width={250}
              height={270}
            />
            <h2 className='text-[#212121] font-semibold mt-1'>{item.name}</h2>
            <p className='text-[#888] font-semibold mt-0.5'>{item.ptype}</p>
            <p className='text-[#212121] font-semibold text-lg mt-1.5'>${item.price}</p>


          </Link>
          </div>
   

        )
      })}

         
      
      
    </div>
  )
}

export default page