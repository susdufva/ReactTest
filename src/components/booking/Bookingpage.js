import React from 'react';
import "./Booking.css"
import Bookinglist from "./Bookinglist"
import Profile from "./ProfileSidebar"

const jwt = localStorage.getItem("jwt")
const userId = localStorage.getItem("userId")

function Bookingpage() {

    return (
        <>
        <div className="grid grid-rows-3 grid-flow-col gap-0 bg-gray-50">
          <div className="row-span-3 ">
            <Profile/>
          </div>
          <div className="col-span-2">
            <h3 className="uppercase tracking-wide text-gray-800 font-semibold py-2 ">Mina bokningar</h3>
          </div>
          <div className="row-span-2 col-span-2">
            <Bookinglist/>
          </div>
    
      </div>
      </>
    )
}

export default Bookingpage
