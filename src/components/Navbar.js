import React from 'react'
import { Link } from 'react-router-dom'
import "./Tailwind.css"


function Navbar() {
    return (
    <>
        <nav className="bg-gray-800">
            <div className="logo">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-5">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        </div>
                    </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                
                {/* <img className="hidden lg:block h-8 w-auto" src="/TWlogo.jpg" alt="Workflow"/> */}
                    </div>
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        <Link to="/" className=" text-white px-3 py-0 rounded-md text-xl font-medium" >BOKA.SE</Link>
                        
                        <Link to="/uploadproduct" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-base  font-medium">Ladda upp</Link>
                        <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-base font-medium">Mina sidor</Link>
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



