import React from 'react'

function CheckBox({title, checked, onChange}) {
  return (
    <div className="flex h-6 w-auto text-xl text-slate-500 items-center justify-start my-[10px]">
            <input type="checkbox"
            className="mr-1" 
            checked={checked}
            onChange={onChange}
            />
            <p>{title}</p>
        </div>
  )
}

export default CheckBox