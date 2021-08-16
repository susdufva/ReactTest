import React from 'react'

function ShowUpdate({username, email}) {
    return (
        <>
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <div className="w-80 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                <p className="uppercase py-2 text-center font-semibold text-md text-gray-800">
                    Dina användaruppgifter
                </p>
              
                <form className="mt-10" method="POST">
                <p className="block w-full py-3 px-2 mt-2 
                        text-gray-800 text-left text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200">
                         {username}
                        </p>
                        <p className="block w-full py-3 px-0.5 mt-2 
                        text-gray-800 text-left text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200">{email}</p> 
                   <p className="p-10 mb-1"></p>
                </form>
            </div>
        </div>
        
    
        </>
    )
}

export default ShowUpdate
