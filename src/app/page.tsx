import Banner from "@/components/Banner";
import ProductCart from "@/components/ProductCart";
import { client } from "@/lib/sanityClient"
import { Image as IImage } from "sanity";
import Image from "next/image";
import Events from "@/components/Events";
import Newsletter from "@/components/Newsletter";
const getProducts = async ()=>{
  const res = await client.fetch(`*[_type == 'product']{
    title,
    description,
    _id,
    image,
    
  }`);
  return res
}

export interface IProduct {
  title: string,
  description: string
  image: IImage
  _id: string
}

export default async function Home() {
  const data:IProduct[] = await getProducts()
  
  
  return (
    <>
    
    <Banner />
    {/* <div className="flex flex-wrap h-screen items-center gap-3 justify-center ">
    {data.map((item,index)=>(
      <div key={index}>
        <ProductCart item = {item} />
      </div>
    ))}
      

   </div>
    */}
    <Events />
    <Newsletter />
    </>
  )
}
