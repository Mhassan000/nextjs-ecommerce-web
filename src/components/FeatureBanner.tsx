import Image from 'next/image'
import featureBanner from '../../public/featureBanner.webp'
const FeatureBanner = () => {
  return (
    <div className='px-8  py-8 mx-auto mt-20  md:max-w-[92rem]  md:px-20  xl:px-28' >
        {/* title */}
        <div className='flex  justify-end'>
            <h1 className='flex justify-end text-3xl md:text-5xl leading-tight w-full lg:w-[45%]  text-[#212121] font-bold'>Unique and Authentic Vintage Designer Jewellery</h1>
        </div>

        {/* Content */}
        <div className='grid grid-cols-1 px-2 xl:grid-cols-[1fr,1fr] bg-[#fbfcff] -mt-14 z-10 pt-20'>
            {/* Left Side */}
            <div className='grid grid-cols-[1fr,1fr] gap-2 relative z-20 items-center justify-center'>
                {/* Background text */}
                <div className="absolute -z-10 ">
                   <span className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl opacity-5  font-bold bg-clip-text leading-1 text-[black] tracking-wider'> Different from  others</span>
                </div>
                <div className='flex flex-col gap-3 mb-5'>
                    <h3 className='text-[#212121] font-bold'>Using Good Quality Materials</h3>
                    <p className='opacity-60'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className='flex flex-col gap-2 mb-5'>
                    <h3 className='text-[#212121] font-bold'>100% Handmade Products</h3>
                    <p className='opacity-60'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className='flex flex-col gap-2 mb-5'>
                    <h3 className='text-[#212121] font-bold'>Modern Fashion Design</h3>
                    <p className='opacity-60'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className='flex flex-col gap-2 mb-5'>
                    <h3 className='text-[#212121] font-bold'>Discount for Bulk Orders</h3>
                    <p className='opacity-60'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
            </div>
            {/* Right */}
            <div className='grid grid-cols-1  sm:grid-cols-[1fr,1fr] gap-8'>
                <div className='flex  justify-center sm:justify-normal'>
                    <Image  src={featureBanner} alt='' />
                </div>
                <div className='flex flex-col items-start justify-center gap-10  '>

                    <p className='hidden lg:flex  opacity-60 leading-7 tracking-wide '>This piece is ethically crafted in our &nbsp; &nbsp; &nbsp;  small &nbsp; &nbsp; &nbsp; family-owned workshop in &nbsp; &nbsp; &nbsp; Peru &nbsp; &nbsp; &nbsp; with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <p className='lg:hidden opacity-60 leading-7 tracking-wide'>This piece is ethically crafted in our  small family-owned workshop in  Peru  with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable. </p>
                    <button className='bg-black s py-2 px-2 text-white border-slate-500 border-t-2 border-l-2 font-semibold'>See All Product</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureBanner