import React, {useState} from 'react'
import axios from "axios"
import Button2 from "./Button2"
import {useHistory } from 'react-router-dom'
import "./Form.css";

const button = [
    {button:"Boka"},
]

function Booked() {

    const initialValue = {
        appointment: " ",
        date: " ",
        email:""
    }

    const [bookingValues, setBookingValues] = useState(initialValue)
    const history = useHistory()

    function handleOnChange(e) {

        setBookingValues({...bookingValues, [e.target.name]:e.target.value})
        //controlled element
    }

    function handleOnSubmit(e) {
        console.log(bookingValues.appointment)
        e.preventDefault();
        // vi ska skicka user registration data till strapi / endpoint 
        axios.post('http://localhost:1337/bookings', {
            appointment: bookingValues.appointment,
            date: bookingValues.date,
            email: bookingValues.email,
            //promises iställer för async await
        }).then ( (e)=> {if(e.data) history.push("/")
            console.log(e)
        }) 
        .catch((error) => {console.log(error.response)}) 
    }

    return (
        <>
          <div className="Form">
            <form className="w-full max-w-sm" onSubmit={handleOnSubmit}>
                <label className="block w-full px-1 text-gray-400 text-xs uppercase text-left" >Önskar boka:</label>
                <input className="block w-full mt-0.5 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200" type="text" name="appointment" 
                value={bookingValues.appointment} onChange={handleOnChange} required /> 
                <input className="block w-full py-3 px-1 mt-2 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200" type="datetime-local" name="date" placeholder="önskad tid" value={bookingValues.date} onChange={handleOnChange} required />
                <input className="block w-full py-3 px-1 mt-2 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200"  type="email" placeholder="Din email" name="email" value={bookingValues.email} onChange={handleOnChange} required />
                
                <div className="flex justify-end mt-8">
                    {button.map( (button)=> {
                        return ( 
                        <Button2 button={button.button} /> ) 
                    } )}
                </div> 
            </form>
        </div>
 
        </>
    )
}

export default Booked
