import React from "react";

export default function FilterButton({filterCount}) {
  return (
      <div className="flex">
        <div className="bg-red-400 text-slate-100 text-[16px] py-[1px] px-2 rounded mr-1">{filterCount}</div>
        </div>
  );
}