import React, {useState, useEffect} from 'react'
import Modal from "react-modal"
import axios from "axios"
import Button2 from "../Button2"
import {useHistory, Link} from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51Ix6VKGrcoIWM135GevI9SHxbf160SNLxwuTZREQgJ8rHosAFKq8DoHBaVZmc17zxtTZwPrCvNdlRl1EM8lWCZ3h00UacgPyVY');

const button = [
    {button:"Boka"},
]

function Card( {productId, productName, price, description, image} ) {

    const initialValue = {
        date: " ",
        mobile:null
    }

    const [modalIsOpen, setIsOpen] = useState(false)
    const [bookingValues, setBookingValues] = useState(initialValue)
    const history = useHistory()
    const userId = localStorage.getItem("userId")
    const [error, setError] = useState("")


    function handleOnChange(e) {
        setBookingValues ({...bookingValues, [e.target.name]:e.target.value})
    }

    async function handleOnSubmit(e) {

        e.preventDefault();
        
        await axios.post('http://localhost:1337/bookings', {
            appointment: productName,
            date: bookingValues.date,
            mobile:Number(bookingValues.mobile),
            users_permissions_user: userId,
            product: productId
            //userId från localstorage, product från props
        }).then ( (e)=> //{if(e.data) history.push("/bookingpage")
            console.log(e)
            //localStorage.setItem("BookingID", response.data.id) 
        //}
        ) 
        .catch((error) => {console.log(error.response);
            setError("Något gick fel, vänligen försök igen")}) 
    } 

    const customStyles = {  //style för modal
        content : {
          background: "white",
          height:"350px",
          width:"290px",
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }
    
    const loadStripe = async (event) => {
        
        const stripe = await stripePromise;
    
        // axios request to create Checkout Session
        const response = await axios.post("http://localhost:4242/create-checkout-session", {name:productName, price:price})
    
        const session = response.data.id
        console.log(session)
    
        //useEffect to render Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session,
        });

        //if (sessionId) {history.push}
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
      
      }

    return (
        <> 
        {/* Card med innehåll från databas och props*/}
        <div className="py-6 mx-8" >
            <div className="flex max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/2 bg-cover" > 
                 <img className="h-44" src={`http://localhost:1337${image.formats.thumbnail.url}`} alt="image from database"/> 
                </div> 
            <div className="w-2/3 p-3">
        <h1 className="text-gray-900 font-bold text-2xl">{productName}</h1>
            <p className="mt-2 text-gray-600 text-sm">{description}</p>
                <div className="flex item-center mt-2">
            </div>
        <div className="flex item-center justify-evenly mt-3">
            <h1 className="text-gray-700 font-bold text-xl">{price}kr</h1>
                <button onClick={openModal} className="px-3 py-1 bg-gray-800 text-white tracking-wider text-xs font-medium uppercase rounded hover:bg-gray-700">Boka</button>
            </div>
            {/* Modal för bokning med conditional rendering om man är inloggad */}
                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                       {userId ? 
                    <div className="block w-full px-1 text-gray-600 text-sm uppercase ">   
                        <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs py-1 px-3 rounded-xl font-medium" onClick={closeModal}>X</button>
                        
                        <form onSubmit={handleOnSubmit} className="flex flex-col"  >
                            <label className="ml-3 mt-10 text-gray-400 text-xs uppercase"> Önskad tid:</label>
                            <p className="block w-full border-b border-teal-500 mb-3"></p>
                            <input className="flex bg-gray-200 m-2" type="datetime-local" name="date" placeholder="önskad tid" value={bookingValues.date} onChange={handleOnChange} required />
                            <input className="block w-full py-3 px-3 mt-2 text-gray-800 text-xs uppercase appearance-none 
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"  type="number" placeholder="Mobilnummer" name="mobile" value={bookingValues.mobile} onChange={handleOnChange} required />
                            <p className="block w-full border-b border-teal-500" ></p>
                            <p>
                            <input className="leading-loose text-pink-600 top-0 mt-3" type="checkbox"/>
                            <span className="ml-2 text-xs py-2 text-gray-600 text-left lowercase">Acceptera<a href="#" className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> Bokningsvillkor </a>  </span>
                            </p>
                            <div className="text-xs mt-2">
                                {error}
                            </div>
                            <div className="flex justify-end mt-7" onClick={loadStripe}>
                                {button.map( (button, id)=> {
                                    return ( 
                                    <Button2 key={id} button={button.button} /> ) 
                                } )}
                            </div> 
                        </form>
                    </div>   //Om man ej är inloggad
                    : <> <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs py-1 px-3 rounded-xl font-medium" onClick={closeModal}>X</button> <div className="block w-full  text-gray-500 text-xs uppercase font-medium mt-16 mb-2" >Du måste vara inloggad för att kunna göra en bokning </div>
                    <div><Link className="text-center font-semibold text-sm text-gray-700 border-b-2 border-gray-200 hover:border-gray-500" to="/register"> Registrera dig  </Link> /<Link className="text-center m-2 font-semibold text-sm text-gray-700 border-b-2 border-gray-200 hover:border-gray-500" to="/login">Logga in</Link> </div> </>}
                    </Modal>
        </div>
        </div>
        </div>
        
        </>
       
    )
}

export default Card