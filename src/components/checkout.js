import React from 'react'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51Ix6VKGrcoIWM135GevI9SHxbf160SNLxwuTZREQgJ8rHosAFKq8DoHBaVZmc17zxtTZwPrCvNdlRl1EM8lWCZ3h00UacgPyVY');

function checkout() {

    const stripeClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        const response = await axios.post("http://localhost:4242/create-checkout-session")
    
        const session = response.data.id
        console.log(session)
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session,
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
      };

    return (
        <>
            <button role="link" onClick={stripeClick}>
                Checkout
            </button>
        </>
    )
}

export default checkout
