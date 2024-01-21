import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='h-[78px] mt-8'>
        <div className='w-[1100px] mx-12 flex'>
            <Link to='/ProductList'>
            <div className='flex w-[185px] mx-4 cursor-pointer'>
                <div className='bg-slate-100 rounded-full w-[60px] h-[60px] '>
                <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="scooty-logo" 
                className='w-[30px] h-[30px] m-4'/>
                </div>
                <p className='text-[20px] text-slate-500  m-4'>Delivery</p>
            </div>
            </Link>
            
            <Link to='/ProductList/diningout'>
            <div className='flex w-[189px] mx-4 cursor-pointer'>
                <div className='bg-slate-100 rounded-full w-[60px] h-[60px]'>
                <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" alt="scooty-logo" 
                className='w-[30px] h-[30px] m-4'/>
                </div>
                <p className='text-[20px] text-slate-500  m-4'>Dining Out</p>
            </div>
            </Link>
            <Link to='/ProductList/nightlife'>
            <div className='flex w-[185px] mx-4 cursor-pointer'>
                <div className='bg-slate-100 rounded-full w-[60px] h-[60px]'>
                <img src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" alt="drinks-logo" className='w-[30px] h-[30px] m-4'/>
                </div>
                <p className='text-[20px] text-slate-500  m-4'>Nightlife</p>
            </div>
            </Link>
        </div>
        <hr className='mt-4'/>
    </div>
  )
}

export default Category