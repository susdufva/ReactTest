import React from 'react'
import Button2 from "../Button2"

const button = [
    {button:"Boka"},
  
]

function Card5({productName, price, description, image} ) {
    return (
        <>
          <div className="w-1/2 h-1/4 flex justify-center items-center">
  <div className="container mx-auto max-w-xs w-full p-4 sm:w-1/2">
    <div className="card flex h-1/4 flex-col justify-center bg-white rounded-lg shadow-xl">
     
        <p className="text-xl uppercase text-gray-800 font-bold">{productName}</p>
        <p className="uppercase text-sm text-gray-400">
          {description}
        </p>
     
     
        <img src={`http://localhost:1337${image.formats.thumbnail.url}`} alt="image from database" className="w-54 h-64 object-contain object-center" />
    
   
        <div className="flex flex-col md:flex-row justify-evenly items-center text-gray-800">
          <p className="font-bold text-lg">{price}kr</p>
          {button.map( (button)=> {
                return ( 
                <Button2 button={button.button} /> ) 
            } )}
        </div>
      </div>
    </div>
  </div>
 
        </>
    )
}

export default Card5
