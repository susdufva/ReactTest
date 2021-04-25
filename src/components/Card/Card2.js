import React from 'react'
import Button from "../Button"

const button = [
    {button:"Boka"},
  
]

function Card2() {
    return (
        <>
        
        <div className="Card2"> 
            <h2>Barberare</h2>
            <p>Boka en klippning hos en proffesionell barberare 700kr</p>
            
              {button.map( (button)=> {
                return ( 
                <Button button={button.button} /> ) 
            } )}
            
        </div>
        </>
    )
}

export default Card2