import React from 'react'
import CaretDown from '../../img/caret-down-icon.svg'

function SearchBar() {
  return (
    <div className='w-full h-[72px] flex'>
      <div className='h-full mx-12 flex'>
        <div className='h-full p-4' >
        <img className='w-[127px] h-[27px]' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato logo" />
        </div>
        <div className='w-[708.44px] h-[52.72px] my-[10px] rounded-lg border-slate-300 border-[0.1px] bg-white shadow-xl flex'>
          <div className='p-[10px] flex'>

            <div>
            <svg className='w-[20px] h-[20px]'><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
            </div>

          <div className='text-slate-500'>
          <input type="text"
          className='ml-[10px] mr-[5px] h-[20px] ' 
          placeholder='BD Block, Sector-1, Bidha'/>
          </div>
          
          <div className='my-[6px] '>
            <img src={CaretDown}
            className='w-full h-4 '
            alt="caret down icon" />
          </div>
          
          </div>

          <div className='flex my-[8px] text-slate-500'>
            <p>|</p>
            {/* <img src={Search} 
            className='w-[20px] h-[20px] mx-2 mt-1'
            alt="search icon" /> */}
            <svg className='w-[20px] h-[20px] mx-2 mt-1'>
            <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
            </svg>
          </div>

          <div className='my-[8px] text-slate-500'>
            <input type="text" 
            placeholder='Search for Restaurant, cuisine or a dish'
            className='w-[400px] ' />
          </div>

          
        </div>
        <div className='text-[20px] w-[67px] h-[39px] p-2 ml-[64px] mt-4 text-slate-500'>Login</div>

      <div className='text-[20px] w-[99px] h-[39px] p-2 mx-4 mt-4 text-slate-500'>Sign up</div>
      </div>

      

    </div>
  )
}

export default SearchBar