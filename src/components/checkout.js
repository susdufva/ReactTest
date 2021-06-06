import React, {useEffect} from 'react'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51Ix6VKGrcoIWM135GevI9SHxbf160SNLxwuTZREQgJ8rHosAFKq8DoHBaVZmc17zxtTZwPrCvNdlRl1EM8lWCZ3h00UacgPyVY');

function Checkout() {

  useEffect(()=>{

    const stripeClick = async (event) => {
        
        const stripe = await stripePromise;
    
        // axios request to create Checkout Session
        const response = await axios.post("http://localhost:4242/create-checkout-session")
    
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
        stripeClick();

      }, [])

    return (
        <>
           
        </>
    )
}

export default Checkout
