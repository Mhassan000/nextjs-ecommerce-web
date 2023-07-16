import React from 'react'
import { urlForImage } from '../../sanity/lib/image';
import Link from 'next/link';
import Image from 'next/image';
import { IFProduct } from '@/app/products/[category]/page'; 

const ProductCard = ({item}:{item:IFProduct}) => {

const imageUrl = Array.isArray(item.image)
        ? urlForImage(item.image[0]) // Assuming you want to display the first image in the array
        : urlForImage(item.image);

  return (

    <div  className='flex mx-auto max-w-[250px] flex-col   '>
        <Link href={`/product/${item.slug.current}`} className='space-y-2'>
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
}

export default ProductCard