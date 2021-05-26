import React from 'react'
import Button from "../Button"

const button = [
    {button:"Boka"},
  
]

function Card1() {
    return (
        <>
        
        <div className="Card1"> 
            <h2>Frisör</h2>
            <p>Boka klippning och färgning av ditt hår från: 900kr</p>
            
              {button.map( (button)=> {
                return ( 
                <Button button={button.button} /> ) 
            } )}
            
        </div>
        </>
    )
}

export default Card1