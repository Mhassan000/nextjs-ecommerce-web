import { client } from "@/lib/sanityClient"


const getProducts = async ()=>{
  const res = await client.fetch(`*[_type == 'product']{
    title,
    description,
  }`);
  return res
}

interface IProduct {
  title: string,
  description: string
}

export default async function Home() {
  const data:IProduct[] = await getProducts()
  console.log(data.length)
  return (
   <div>
    {data.map((item,index)=>(
      <div key={index}>
        
          <h2 className="font-bold  " >{item.title}</h2>
          
      </div>
    ))}
      
   </div>
  )
}
