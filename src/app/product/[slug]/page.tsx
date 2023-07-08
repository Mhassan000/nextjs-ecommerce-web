import { client } from '@/lib/sanityClient'

export async function generateStaticParams() {
    //Generating all the product slugs
    // const res = await client.fetch (`*[_type == "product" && slug.current == $slug]{  ]`);
    // // console.log ('Product',res)
    //   return res.map((product:any) => ({
               
    //   }));
    // }
    const res = await client.fetch (`*[_type == "product" ]{  slug}`); 
    return res.map((product:any) => ({
        params: {
            slug: product.slug.current
        }
    }));  
}
export default async function Page({ params }: { params: { slug: string } }) {
  const {slug} = params
  // Fetch the product data based on the slug
  const product = await client.fetch (`*[_type == "product" && slug.current == '${slug}'  ]{
    name,
    description,
    _id,
    image,
    }`); 
    console.log('ProducID:',slug);
    console.log('Product:',product);
    return (
        <div >
          {/* Display product data */}
          {product.map((item:any,index:number)=>(
            <div key={index}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          ))}
          
          
        </div>
    )
  }