'use client'
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/Logo.webp'
import { BiSearch } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';
import { RiMenu3Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { usePathname } from "next/navigation";

 const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm,setSearchTerm] = useState('')
    const pathname = usePathname();
    
    const hanldeSearch = (e: ChangeEvent<HTMLInputElement>)=>{
      setSearchTerm(e.target.value)  
    }
    const active = 'text-[black] font-semibold'
    return (
          <div className="px-8 py-8 mx-auto sticky top-0 z-50 bg-white md:max-w-[92rem]  md:px-20  xl:px-28">
            <div className="relative  flex items-center justify-between">
              {/* Logo */}
              <Link href={'/'} className="">
                    <Image className="" src={logo} width={150} height={200} alt="log" />
              </Link>
              <ul className=" items-center hidden lg:space-x-4  xl:space-x-8  lg:flex gap-3">
                <Link className={pathname == "/products/Female" ? active : ""} href={'products/Female'}>Female</Link>
                <Link className={pathname == "/products/Male" ? active : ""} href={'products/Male'}>Male</Link>
                <Link className={pathname == "/products/Kids" ? active : ""} href={'products/Kids'}>Kids</Link>
                <Link className={pathname == "/products" ? active : ""} href={'/products'}>All Products</Link>
              </ul>
              
                <form>
                    <div className="md:flex     hidden rounded border-2  border-gray-200 relative items-center">
                        <input className="text-xs lg:w-[200px]  xl:w-[400px] px-7 py-1 outline-none  " value={searchTerm} onChange={hanldeSearch} type="text" placeholder="Search Products" />
                        <span className="absolute py-1 top-0 left-1"><BiSearch fill="gray" /></span>
                    </div>
                </form>

                {/* Cart Icom */}

                <Link href={'/cart'} className="lg:flex relative bg-gray-200 hidden lg:p-2 lg:rounded-full">
                    <BiCart fontSize={30} />
                    <p className="absolute top-0 bg-red-600 text-white px-1.5 py-0.5 w-auto h-auto rounded-full  right-1 text-[8px]">0</p>

                </Link>

             

              <div className="lg:hidden z-50  ">
                <button
                  
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none "
                  onClick={() => setIsMenuOpen(true)}
                >
                  <RiMenu3Line fill="black" fontSize={25} />
                </button>
                {isMenuOpen && (
                  <div className="absolute  top-0 left-0 w-full z-50 ">
                    <div className="p-5 bg-white border rounded ">
                      <div className="flex items-center justify-between mb-9">
                        <Link href={'/'}  onClick={()=>setIsMenuOpen(false)} className="">
                            <Image className="" src={logo} width={150} height={200} alt="log" />
                        </Link>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <IoMdClose fontSize={30} />
                          </button>
                        </div>
                      </div>
                       {/* Cart Icom */}
                      <Link onClick={()=>setIsMenuOpen(false)} href={'/cart'} className="-mb-4 w-fit  mx-auto   relative  flex bg-gray-200  p-2 rounded-full">
                              <BiCart fontSize={30} />
                              <p className="absolute top-0 bg-red-600 text-white px-1.5 py-0.5 w-auto h-auto rounded-full  right-1 text-[8px]">0</p>

                      </Link>
                      <nav>
                        <ul onClick={()=>setIsMenuOpen(false)} className="space-y-4 flex flex-col items-center py-8">
                          <Link  className=" hover:text-blue-700 active:text-green-700" href={'products/Female'}>Female</Link>
                          <Link className=" hover:text-blue-700" href={'products/Male'}>Male</Link>
                          <Link className=" hover:text-blue-700" href={'products/Kids'}>Kids</Link>
                          <Link className=" hover:text-blue-700" href={'/products'}>All Products</Link>
                         
                        </ul>
                          
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
       
    );
  };

export default Header;