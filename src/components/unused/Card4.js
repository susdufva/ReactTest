import React from 'react'
import Button2 from "../Button2"

const button = [
    {button:"Boka"},
  
]

function Card4( {productName, price, description, image}) {
    return (
        <>
        <div className="Card4"> 
            <div className=" bg-cover" >
            <img src={`http://localhost:1337${image.formats.thumbnail.url}`} alt="some image from database"/> 
            </div>
                <h2>{productName}</h2>
                    <p>{description}</p>
                    <p>{price} </p>
            
              {button.map( (button)=> {
                return ( 
                <Button2 button={button.button} /> ) 
            } )}
            
        </div> 
        </>
    )
}

export default Card4
