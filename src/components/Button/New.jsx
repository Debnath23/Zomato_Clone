import React from "react";
import Cross from "../Icons/Cross";
import CheckBox from "./CheckBox";
import { Cuisines } from "../Products/Products";

function New() {
  return (
    <div className="m-10 w-[510px] h-[472.64px] bg-slate-50 rounded-md">
      <div className="rounded-md w-[510px] h-[396px] border-slate-500 px-[25px] pt-[25px] pb-[35px]">
        <p className="w-[460px] h-8 mb-4 text-2xl text-slate-800">Cuisines</p>

        <div className="w-[460px] h-12 flex text-slate-500 items-center p-2 border-[1px] rounded-md border-slate-500">
          <svg className="w-[22px] h-[22px] mr-2">
            <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search here"
            className="w-full bg-slate-50"
          />
          <Cross className="text-slate-400" />
        </div>

        <div
          className="overflow-auto"
          style={{ maxHeight: "calc(100% - 72px)" }}
        >
          <div className="grid grid-cols-2 ml-6">
            {Cuisines.map((cuisine, index) => (
              <CheckBox key={index} title={cuisine} />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex mx-[30px] my-4 justify-end">
        <div className="w-[105px] h-[44px] text-[14px] rounded-md flex justify-center items-center border-[1px] border-slate-400 mr-3 text-slate-600 cursor-pointer">
          Clear all
        </div>
        <div className="w-[105px] h-[44px] text-[14px] rounded-md bg-red-500  flex justify-center items-center text-white cursor-pointer">
          Apply
        </div>
      </div>
    </div>
  );
}

export default New;
