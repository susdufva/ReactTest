import React from 'react'
import axios from "axios"

function Bookingcard( {bookingId, appointment, date} ) {  

    function deleteBooking() {
        axios.delete(`http://localhost:1337/bookings/${bookingId}`)
        window.location.reload();
    }

    return (
        <>
    <div className="flex flex-col">
        <div className=" mx-2 my-20 ml-8 sm:my-auto">
            <div className="w-11/12 p-12 sm:w-11/12 md:w-11/12 lg:w-11/12 2xl:w-11/12
                px-6 py-10 sm:px-10 sm:py-5 
                bg-white rounded-lg shadow-md lg:shadow-lg">
             
                <div className="mt-10 m-2" >
               
                    <p className="block w-full py-2 px-2 mt-2 
                        text-gray-800 text-left text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200">
                         {appointment}
                        </p>
                    <p className="block w-full py-3 px-0.5 mt-2 
                        text-gray-800 text-left text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200">{date}</p>
                        <button className="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-5 rounded-lg font-medium" onClick={deleteBooking}>Avboka</button>
                </div>
            </div>
        </div>
    </div>  
        </>
    )
}

export default Bookingcard
