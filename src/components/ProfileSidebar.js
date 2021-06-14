import React from 'react'

const username = localStorage.getItem("username")
console.log(username)

function ProfileSidebar() {
    return (
        <>
          
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
        <div className="flex flex-row bg-gray-50">
        <div className="flex flex-col min-h-screen w-56 shadow-md mt-1 bg-white rounded-r-3xl overflow-hidden">
            <div className="flex items-center justify-center h-28 shadow-md">
                <div className="w-1/2">
                    <img
                    src="https://randomuser.me/api/portraits/women/27.jpg"
                    className="mx-auto w-20 h-20 rounded-full"
                    />
                </div>
                    <span className="font-semibold text-sm uppercase text-gray-800">{username}</span>  
            </div>
            <ul className="flex flex-col py-4">
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                <span className="text-sm font-medium">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                <span className="text-sm font-medium">Shopping</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                <span className="text-sm font-medium">Chat</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                <span className="text-sm font-medium">Profile</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                <span className="text-sm font-medium">Notifications</span>
                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                <span className="text-sm font-medium">Logout</span>
                </a>
            </li>
            </ul>
        </div>
        </div>  
        </>
    )
}

export default ProfileSidebar
