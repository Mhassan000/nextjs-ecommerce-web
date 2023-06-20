import { client } from '@/lib/sanityClient'

export async function generateStaticParams() {
    
    const res = await client.fetch (`*[_type == "product" ]`);
      return res.map((post:any) => ({
        _id : post._id 
        
        
      }));
    }
  
export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    console.log('ProducID:',id);
    
    return (
        <div>

            <h2>{params.id}</h2>
        </div>
    )
  }