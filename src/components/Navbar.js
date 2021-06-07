import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./Tailwind.css"



function Navbar() {
    const adminRole = localStorage.getItem("admin")
    console.log("local värde", adminRole)
    const [admin, setAdmin] = useState(false)

    useEffect(()=>{
        if(adminRole==='true'){
            setAdmin(true);
        }
          
      }, [])
      console.log("nytt värde", admin)

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
                    </div>
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        <Link to="/" className=" text-white px-3 py-0 rounded-md text-xl font-medium" >BOKA.SE</Link>
                        { admin === true && 
                        <Link to="/uploadproduct" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-base  font-medium">Ladda upp</Link> } 
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



