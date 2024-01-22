import React, { useState } from "react";

export default function FilterButton({
    children,
    type = "button",
    text = "text-[14px]",
    border = "border-[0.1px]",
    b_radius = "rounded-md",
    b_color = "border-slate-300",
    padding = "p-2",
    margin = "my-4 mr-4",
    className = "",
    ...props
  }) {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleToggle = () => {
      setIsChecked(!isChecked);
    };
    return (
      <button
        className={`w-auto h-auto flex items-center ${text} ${border} ${b_radius} ${b_color} ${padding} ${margin} ${className}
          ${isChecked ? "bg-red-400 text-slate-100" : "fill-current text-slate-500"}`}
        {...props}
        onClick={handleToggle}
      >
        {isChecked ? <div className="flex">
          {children} 
          <svg className="w-[18px] h-[18px] ml-1 fill-current text-white"><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
          </div>   : children}
      </button>
    );
  }
  