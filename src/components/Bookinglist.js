import React, {useState, useEffect} from 'react';
import axios from "axios";
import Bookingcard from "./Bookingcard"


function Bookinglist() {
 
    const [bookings, setBookings] = useState([]);
    const userId = localStorage.getItem("userId");

    useEffect(()=>{

        console.log("userId", userId)
       
        const fecthBookings= async()=>{
           const response =   await axios.get(`http://localhost:1337/bookings?users_permissions_user.id=${userId}`)
           
           console.log(response)

           setBookings(response.data)
        }


        fecthBookings();

    }, [])

    // useEffect för att kunna hämta data från database 

    return (
        <>
        <div className="flex justify-center mt-4">
            
            {bookings.map((booking)=>{
                return (
                    <Bookingcard key={booking.id} bookingId={booking.id} appointment={booking.appointment}  date={booking.date} />
                )
            }) }
              
       </div> 
        </>
    )
}

export default Bookinglist
