import React from "react";
import IndiaIcon from "../../img/IndiaIcon.png"

function Footer() {
  return (
    <div className="bg-slate-100 h-auto px-[209.6px] pb-[22px] mt-[60px]">
      <div className="pt-12 flex justify-between">
        <img
          className="w-[132px] h-[28x]"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zomato logo"
        />
        <div className="flex ">
          <button className="text-xl border-[0.1px] rounded-md border-slate-300 flex p-1 w-auto h-auto items-center mr-6">
            <img src={IndiaIcon} alt="Indian Flag" className="w-5 h-5 mr-1"/>
            India
            <svg className="w-[18px] h-[18px]">
              <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg></button>
          <button className="text-xl border-[0.1px] rounded-md border-slate-300 flex p-1 w-auto h-auto items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 mr-1"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
            English
            <svg className="w-[18px] h-[18px]">
              <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg></button>
        </div>
      </div>
      <div className="grid grid-cols-4 pt-10">
        <div className="text-md">
          <nav>
            <h6 className="font-normal text-lg">ABOUT ZOMATO</h6>
            <a href="#">
            <p className="my-[5px] text-slate-500">Who We Are</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Blog</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Work With Us</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Investor Relations</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Report Fraud</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Press Kit</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Contact Us</p>
            </a>
          </nav>
        </div>
        <div className="text-md">
          <nav>
            <h6 className="font-normal text-lg">ZOMAVERSE</h6>
            <a href="#">
              <p className="my-[5px] text-slate-500">Zomato</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Blinkit</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Feeding India</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Hyperpure</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Zomaland</p>
            </a>
          </nav>
        </div>
        <div className="text-md">
          <nav>
            <h6 className="font-normal text-lg">FOR RESTAURANTS</h6>
            <a href="#">
              <p className="my-[5px] text-slate-500">Partner With Us</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Apps For You</p>
            </a>
            <a href="#">
              <p className="my-[5px] font-normal text-lg">FOR ENTERPRISES</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Zomato For Enterprise</p>
            </a>
          </nav>
        </div>
        <div className="text-md ">
          <nav>
            <h6 className="font-normal text-lg">LEARN MORE</h6>
            <a href="#">
              <p className="my-[5px] text-slate-500">Privacy</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Security</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Terms</p>
            </a>
            <a href="#">
              <p className="my-[5px] text-slate-500">Sitemap</p>
            </a>
          </nav>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="pt-[23px] mb-[13px] text-slate-500">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat aliquid quidem soluta dolore maxime nam, numquam officia quasi rem. Possimus blanditiis, adipisci vel nam laudantium amet soluta ullam culpa atque, ipsa suscipit voluptatibus aut? Aliquam quibusdam quia magnam cum.</p>
      </div>
      {/* "react-slick": "^0.29.0", */}
    </div>
  );
}

export default Footer;
