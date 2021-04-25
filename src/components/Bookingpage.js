import React from 'react';
import Button from "./Button"
import "./Booking.css"

const button = [
    {button:"Boka om"},
    {button:"Avboka"},
]

function Bookingpage() {
    return (
        <>
         <h3 className="no-underline border-b-2 border-transparent uppercase tracking-wide font-bold py-3 mr-8">Mina bokningar</h3>
        <div className="Bookings">
    
        
            
        <div className="min-h-screen-60 flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
       
        
      <div className="max-w-xs w-full space-y-8">
       

        <div className="appearance-none rounded-none relative block w-max px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Barberare"
              />
            </div>
            <div>
              <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Onsdag 28/4  kl:14.00"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
            </div>
          </div>
        </form>
        <div className="Book-button">
              {button.map( (button)=> {
                return ( 
                <Button button={button.button} /> ) 
            } )}
        </div>
      </div>
    </div>
    
    
        </div>
        <div className="min-h-screen-60 flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
       
        
       <div className="max-w-xs w-full space-y-8">
 
         <div className="appearance-none rounded-none relative block w-max px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
         <form className="mt-8 space-y-6" action="#" method="POST">
           <input type="hidden" name="remember" defaultValue="true" />
           <div className="rounded-md shadow-sm -space-y-px">
             <div>
               <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                 placeholder="Frisör"
               />
             </div>
             <div>
               <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                 placeholder="Lördag 1/5  kl:12.00"
               />
             </div>
           </div>
 
           <div className="flex items-center justify-between">
             <div className="flex items-center">
             </div>
           </div>
         </form>
         <div className="Book-button">
               {button.map( (button)=> {
                 return ( 
                 <Button button={button.button} /> ) 
             } )}
         </div>
       </div>
     </div>
     
     
         </div>
         </div>
        </>
    )
}

export default Bookingpage
