import React from 'react'
 
function Filter() {
  return (
    <div className='w-full py-4 flex'>
    <div className='w-[1100px] max-h-[35px] flex mx-12'>
        <div className='bg-slate-100 w-[90px] h-[35px] text-[14px] rounded-md border-slate-300 border-[0.1px] mx-2 flex'>
            <svg className='w-[18px] h-[18px] mt-[8px] ml-[6px]'><path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path></svg>
            <button className='mt-[2px] px-[10px]'>Filters</button>
        </div>
        <div className='bg-slate-100 w-[90px] h-[35px] text-[14px] rounded-md border-slate-300 border-[0.1px] mx-2 flex'>
            <button className='mt-[1px] ml-[6px]'>Rating: 4.0+</button>
        </div>
        <div className='bg-slate-100 w-[90px] h-[35px] text-[14px] rounded-md border-slate-300 border-[0.1px] mx-2 flex'>
            <button className='px-[14px]'>Pure Veg</button>
        </div>
        <div className='bg-slate-100 w-[90px] h-[35px] text-[14px] rounded-md border-slate-300 border-[0.1px] mx-2 flex'>
            <button className='pl-[10px]'>Cuisines</button>
            <svg className='w-4 h-4 mt-2 ml-[2px]'>
            <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg>
        </div>
    </div>
    </div>
  )
}

export default Filter