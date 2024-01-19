import React from 'react'

function MenuCard({title}) {
    return (
        <div className='text-2xl m-3 p-4 rounded-lg shadow-lg hover:drop-shadow-2xl cursor-pointer border-solid border-1 border-slate-200'>
            {title}
        </div>
    )
}

export default MenuCard
