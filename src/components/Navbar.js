import React from 'react'
import { Link } from 'react-router-dom'
import "./Tailwind.css"


function Navbar() {
    return (
    <>
        <nav class="bg-gray-800">
            <div className="logo">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-5">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        </div>
                    </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                
                {/* <img class="hidden lg:block h-8 w-auto" src="/TWlogo.jpg" alt="Workflow"/> */}
                    </div>
                <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        <Link to="/" className=" text-white px-3 py-0 rounded-md text-xl font-medium" >BOKA.SE</Link>
                        
                        <Link to="/uploadproduct" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-base  font-medium">Ladda upp</Link>
                        <Link to="/booked" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-base  font-medium">Boka</Link>
                        <Link to="/register" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-base font-medium">Mina sidor</Link>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </nav>
    
    </>
    )
}

export default Navbar



