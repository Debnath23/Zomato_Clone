import React from 'react'

function Header() {
    return (
        <header className="w-full h-auto mt-40">
          <div className="h-auto w-full items-center justify-center">
            <div className="h-[60px] flex justify-center p-1">
              <img
                className="h-[60px] w-[397]"
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt="zomato-logo"
              />
            </div>
            <div className="flex flex-wrap justify-center text-4xl mx-[75px] pt-10 text-white ">
              Find the best restaurants, cafés
            </div>
            <div className="flex flex-wrap justify-center text-4xl mx-[75px] text-white ">
              and bars in India
            </div>
          </div>
        </header>
    )
}

export default Header
