import { client } from '@/lib/sanityClient'
import { urlForImage } from '../../../../sanity/lib/image';
import Image from 'next/image';
import AddToCart from '@/components/AddToCart';

export default async function Page({ params }: { params: { slug: string } }) {
  const {slug} = params
  
  
  // Fetch the product data based on the slug
  const product = await client.fetch (`*[_type == "product" && slug.current == '${slug}'  ]{
    name,
    ptype,
    description,
    _id,
    image,
    price,
    }`); 
    const { image, name, description, price ,ptype,_id} = product[0];

    
    
    return (
      
        <div className='px-8  py-8 mx-auto  md:max-w-[92rem]  md:px-20  xl:px-28'>

          <div className='grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6'>
            {/* Images */}
            <div className='flex   gap-5 '>
              
              <div className='flex flex-col gap-5'>
                {image.map((item:any,index:number)=>(
                  <div key={index} >
                  <Image 
                  key={index}
                  src={urlForImage(item) as string} 
                  alt="" 
                  width={100}
                  height={100}
                  
                  />
                  </div> 
                ))}
              </div>
              <div className='w-full h-full'>
                
                  <Image className='w-full h-full object-cover bg-cover'
                  
                  src={urlForImage(image[0]) as string}
                  alt=""
                  width={0}
                  height={0}
                  sizes='100vw'
                  />
              </div>
            </div>

            {/* Product info */}
            <div className='flex flex-col gap-7 mt-16'>
              <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>{name}</h1>
                <p className='text-[#888] text-lg font-semibold'>{ptype}</p>

              </div>
              <p className='font-semibold'>SELECT SIZE</p>
              <div className='flex gap-2'>
                <div className='w-10 h-10 hover:bg-white hover:rounded-full hover:drop-shadow  shadow-white text-[#666] hover:cursor-pointer font-semibold  flex justify-center items-center'>XS</div>
                <div className='w-10 h-10 hover:bg-white hover:rounded-full hover:drop-shadow  shadow-white text-[#666] hover:cursor-pointer font-semibold  flex justify-center items-center'>S</div>
                <div className='w-10 h-10 hover:bg-white hover:rounded-full hover:drop-shadow  shadow-white text-[#666] hover:cursor-pointer font-semibold  flex justify-center items-center'>M</div>
                <div className='w-10 h-10 hover:bg-white hover:rounded-full hover:drop-shadow  shadow-white text-[#666] hover:cursor-pointer font-semibold  flex justify-center items-center'>L</div>
                <div className='w-10 h-10 hover:bg-white hover:rounded-full hover:drop-shadow  shadow-white text-[#666] hover:cursor-pointer font-semibold  flex justify-center items-center'>XL</div>
              </div>
              
              {/* Add To Cart , Quantity And Price */}
              <AddToCart productId={_id} price={price} name={name} />
            </div>
          </div>
          
        </div>
    )

  }
