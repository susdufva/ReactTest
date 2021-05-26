import React from 'react'
import Button from "./Button"

const button = [
    {button:"Boka"},
  
]

function Card3() {
    return (
        <>
        
        <div className="Card3"> 
            <h2>Massage</h2>
            <p>Boka en oljemassage med tillhörande lermask 1200kr</p>
            
              {button.map( (button)=> {
                return ( 
                <Button button={button.button} /> ) 
            } )}
            
        </div>
        </>
    )
}

export default Card3
