import React from 'react'
import merchImage from '../assets/merch-banner.png'
import {Link} from 'react-router-dom'

const Merch = () => {
  return (
    <section className='bg-gray-100  py-12 text-center'>
     <h1 className='text-4xl md:text-5xl  text-gray-400 font-light'>BROWSE OUR MERCH</h1>

<div className="mt-4">
<img src={merchImage} alt="Merchandise" className='w-full' />
</div>

<div className="flex justify-center mt-6">
    <Link to="/about">
      <button className='bg-gray-100 border border-gray-300 text-gray-400 font-light text-xl py-4 px-6 cursor-pointer hover:border-[#ff9752] hover:text-[#ff9752] transition-all duration-300 rounded tracking-widest'>
        VIEW MERCH
      </button>
    </Link>
</div>

    </section>
  )
}

export default Merch
