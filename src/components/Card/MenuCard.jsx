import React from 'react'

function MenuCard({title}) {
    return (
        <div className='w-[366px] h-[100px]'>
        <div className='w-[353.35px] h-[65.28px] flex items-center text-xl border-[1px] border-slate-200 rounded-md px-6 py-5 mb-[15px] justify-between hover:shadow-md bg-slate-50'>
            <div>{title}</div>
            <svg className='w-[15px] h-[15px]'><path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path></svg>
        </div>
        </div>
    )
}

export default MenuCard
