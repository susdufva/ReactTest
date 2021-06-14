import React from 'react';
import "./Booking.css"
import {useHistory} from "react-router-dom";
import Bookinglist from "./Bookinglist"
import Profile from "./ProfileSidebar"

const jwt = localStorage.getItem("jwt")
const userId = localStorage.getItem("userId")

function Bookingpage() {

  const history = useHistory()

function Logout(){
  localStorage.removeItem("jwt");
  localStorage.removeItem("userId");
  localStorage.removeItem("admin");
  history.push("/")

}
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
      <div className="mt-20 m-6">
            <button onClick={Logout} className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white tracking-wide text-xs font-medium uppercase rounded">
                  Logga ut
            </button>
        </div>
      </>
    )
}

export default Bookingpage
