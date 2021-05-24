import React from 'react'
import Button2 from "../Button2"

const button = [
    {button:"Ändra / Avboka"}
]

function Bookingcard( {appointment, date} ) {
    return (
        <>
    <div className="Bookings">
              <div className="min-h-screen-60 flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-xs w-full space-y-8">
                  <div className="appearance-none rounded-none relative block w-max px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    <form className="mt-8 space-y-6" action="#" method="POST">
                      <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <p className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" >{appointment} </p>
                  </div>
                  <div>
                    <p className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" > {date} </p>
                  </div>
                  </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
            </div>
          </div>
        </form>
                  <div className="mt-8 text-sm">
                    {button.map( (button)=> {
                        return ( 
                        <Button2 button={button.button} /> ) 
                    } )}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>  
        </>
    )
}

export default Bookingcard
