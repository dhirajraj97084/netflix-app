import React from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'

function Header() {
  return (
    <div className='absolute px-4 py-2  flex justify-between items-center w-full '>
        <div className="log0 ">
          <img className='w-44' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYL3oCIVBxVcvgFgG2FG5pRvwIsz60iCIcNw&s" alt="logo" />
        </div>
        <div className="div flex gap-4 bg-black/30">
          <button className='px-4 flex justify-center items-center gap-2 border-2 rounded-md border-gray-100 bg-transparent text-white font-semibold'>
            English
            <IoMdArrowDropdownCircle />
          </button>
          <button className='bg-red-600 px-4 py-1.5 rounded-md text-white cursor-pointer hover:bg-red-700'>
            Signup
          </button>
        </div>
    </div>
  )
}

export default Header