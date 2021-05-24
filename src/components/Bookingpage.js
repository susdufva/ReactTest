import React from 'react';
import Button from "./Button"
import "./Booking.css"
import Button2 from "./Button2"
import {useHistory} from "react-router-dom";
import Bookinglist from "./Bookinglist"

const button = [
    {button:"Ändra / Avboka"} 
]

const jwt = localStorage.getItem("jwt")
//const userId = localStorage.getItem("userId") tror inte jag behöver 

function Bookingpage() {

  const history = useHistory()

function Logout(){
  localStorage.removeItem("jwt");
  localStorage.removeItem("userId");
  history.push("/")

}
    return (
        <>
          <h3 className="uppercase tracking-wide m-16 text-gray-800 font-semibold py-2 ">Mina bokningar</h3>

      <Bookinglist/>
        <div className="mt-20 m-6">
            <button onClick={Logout} className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white tracking-wide text-xs font-medium uppercase rounded">
                  Logga ut
            </button>
        </div>
 
      </>
    )
}

export default Bookingpage
