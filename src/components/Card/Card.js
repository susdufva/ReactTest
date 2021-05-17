import React from 'react';

function card( {productName, price, description, image} ) {

    return (
        
        <>
      
        <div className="py-6 mx-8" >
            <div className="flex max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/2 bg-cover" > 
                 <img className="h-44" src={`http://localhost:1337${image.formats.thumbnail.url}`} alt="image from database"/> 
                 {/* <img src={`http://localhost:1337${image.url}`} alt="some image from database"/> */}
                </div> 
            <div className="w-2/3 p-3">
        <h1 className="text-gray-900 font-bold text-2xl">{productName}</h1>
            <p className="mt-2 text-gray-600 text-sm">{description}</p>
                <div className="flex item-center mt-2">
            </div>
        <div className="flex item-center justify-evenly mt-3">
            <h1 className="text-gray-700 font-bold text-xl">{price}kr</h1>
                <a href="/Booked" className="px-3 py-1 bg-gray-800 text-white tracking-wider text-xs font-medium uppercase rounded hover:bg-gray-700">Boka</a>
            </div>
        </div>
        </div>
        </div>
        
        </>
       
    )
}

export default card