'use client'

import { urlForImage } from "../../sanity/lib/image"
import Image from "next/image"
import { IProduct } from "@/app/page"
import { Image as IImage } from "sanity";

interface ProductCartProps {
  item: IProduct;
}



const ProductCart: React.FC<ProductCartProps> = ({ item }) => {

    const handleAddtoCart = async()=>{
        const res = await fetch ('/api/cart' ,{
          method: 'POST',
          body: JSON.stringify({
            product_id: item._id
          })
        })     
        const result = await res.json()
        console.log('result: ',result)
    }
    // First method for getting first images 
    const imageUrl = Array.isArray(item.image)
    ? urlForImage(item.image[0]) // Assuming you want to display the first image in the array
    : urlForImage(item.image); 

    //Second method for display all the images
    // const images = Array.isArray(item.image) ? item.image : [item.image];
  return (
    <div className="">
      <Image
        src={imageUrl as string}
        alt=""
        width={200}
        height={200}
      />

      {/* Getting all the images  */}
      {/* {images.map((image, index) => (
        <Image
          key={index}
          src={urlForImage(image) as string} // Type assertion to ensure a single string URL
          alt=""
          width={200}
          height={200}
        />
      ))} */}
      <h2 className="font-bold fel ">{item.title}</h2>

          <button onClick={handleAddtoCart} className="bg-blue-700 p-2 rounded text-white">Add To Cart</button>
      </div>
  )
}

export default ProductCart