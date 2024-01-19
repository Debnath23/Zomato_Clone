import React from 'react'

function Navbar() {
    return (
        <nav className="w-full h-12 flex justify-end p-12 md:p-12">
          <ul className="md:flex hidden text-2xl">
            <li className="p-3 mx-3 cursor-pointer text-white">
              Add Restaurant
            </li>
            <li className="p-3 mx-3 cursor-pointer text-white">Log in</li>
            <li className="p-3 mx-3 cursor-pointer text-white">Sign up</li>
          </ul>
        </nav>
    )
}

export default Navbar
