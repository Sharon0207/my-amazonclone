import React, { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {logo} from "../../assets/index";
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';

const Header = () => {
  const [showAll, setShowAll] = useState(false)
  
  return (
    <div >
      <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>

        {/* Image Start here*/}
       <div className="headerHover">
        <img className="w-24 mt-2" src={logo} alt=""/>
       </div>
      {/* Image End here*/}

      {/*Deliver start here */}
      <div className="headerHover">
        <LocationOnOutlinedIcon />
        <p className="text-sm text-lightText font-light flex flex-col">
          Deliver to {" "} 
          <span className="text-sm font-semibold -mt-1 text-whiteText"> 
            Nigeria</span></p>

      </div>
      {/* Deliver End here*/}

      {/*Search Start here */}
      <div className="h-10 rounded-md flex flex-grow relative ">
        <span onClick={()=> setShowAll(!showAll)}className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
          All <span></span> 
          <ArrowDropDownOutlinedIcon/>
          </span>
          {
            showAll && (
              <div>
                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                  {allItems.map((item) => (
                    <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200" key={item._id}>
                    {item.title}</li>

                  ))}
                  
                </ul>
              </div>
            )
          }
        <input 
        className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
        type="text"/>

        <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
          <SearchIcon/>
        </span>
      </div>
      {/* Search End here*/}

      {/* Signin Start here*/}
      <div className='flex flex-col items-start justify-center headerHover'>
        <p className="text-xs text-lightText font-light">Hello, sign in</p>
        <p className="text-sm font -semibold -mt-1 text-whiteText">Account & Lists <span><ArrowDropDownOutlinedIcon/></span></p>
      </div>
      {/* Signin End here*/}

      {/*Orders Start here */}
      <div className="flex flex-col items justify-center headerHover">
        <p className="text-xs text-lightText font-light">Returns</p>
        <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
      </div>
      {/*Orders End here */}


      {/* Cart Starts here*/}
      <div className="flex items-start justify-center headerHover relative">
        <ShoppingCartIcon/>
        <p className='text-xs font-semibold mt-3 text-whiteText'>Cart
          <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span>
          </p>
      </div>
      {/*Cart Ends here */}
      </div>

          <HeaderBottom/>        
    </div>
  )
}

export default Header;