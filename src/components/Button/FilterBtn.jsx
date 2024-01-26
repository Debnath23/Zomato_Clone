import React, { useState } from "react";
import Filter from "../Icons/Filter";

export default function FilterButton({num}) {
  return (
    <button>
      <div className="flex p-1">
        <div className="bg-red-400 text-slate-100 text-[16px] py-[1px] px-2 rounded mr-1">{num}</div>
        </div>
    </button>
  );
}