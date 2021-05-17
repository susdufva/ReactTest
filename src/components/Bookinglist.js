import React, {useState, useEffect} from 'react';
import axios from "axios";
import Bookingcard from "./Bookingcard"


function Bookinglist() {

    // useState for products 
    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
       
        const fecthBookings= async()=>{
           const response =   await axios.get("http://localhost:1337/bookings")
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
                    <Bookingcard key={booking.id} appointment={booking.appointment}  date={booking.date} />
                )
            }) }
              
       </div> 
        </>
    )
}

export default Bookinglist
