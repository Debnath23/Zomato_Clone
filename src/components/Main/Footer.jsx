import React from "react";

function Footer() {
  return (
    <div className="bg-slate-100 h-[400px] ">
      
      <div className="grid grid-cols-4 mt-[30px] ml-[209.6px] pt-10">
        <div className="text-lg ">
        {/* <div className="h-full p-4">
        <img
          className="w-[127px] h-[27px]"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zomato logo"
        />
      </div> */}
          <nav>
            <h6 className="font-semibold text-2xl">ABOUT ZOMATO</h6>
            <a href="#">
              <p className="my-3 text-slate-500">Who We Are</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Blog</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Work With Us</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Investor Relations</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Report Fraud</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Press Kit</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Contact Us</p>
            </a>
          </nav>
        </div>
        <div className="text-lg ">
          <nav>
            <h6 className="font-semibold text-2xl">ZOMAVERSE</h6>
            <a href="#">
              <p className="my-3 text-slate-500">Zomato</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Blinkit</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Feeding India</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Hyperpure</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Zomaland</p>
            </a>
          </nav>
        </div>
        <div className="text-lg ">
          <nav>
            <h6 className="font-semibold text-2xl">FOR RESTAURANTS</h6>
            <a href="#">
              <p className="my-3 text-slate-500">Partner With Us</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Apps For You</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">FOR ENTERPRISES</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Zomato For Enterprise</p>
            </a>
          </nav>
        </div>
        <div className="text-lg ">
          <nav>
            <h6 className="font-semibold text-2xl">LEARN MORE</h6>
            <a href="#">
              <p className="my-3 text-slate-500">Privacy</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Security</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Terms</p>
            </a>
            <a href="#">
              <p className="my-3 text-slate-500">Sitemap</p>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
