import React, {useState, useEffect} from 'react';
import axios from "axios";
//import Booked from "./Booked"

function FetchBookings() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
       
        const fecthProducts= async()=>{
           const response = await axios.get("http://localhost:1337/products")
           console.log(response)

           setProducts(response.data)
        }


        fecthProducts();
        console.log(products)
    }, [])

    // useEffect för att kunna hämta data från database 

    return (
        <div >
            
             {products.map((product)=>{
                 return (
                     <>
                      {/* <Card key={product.id} image={product.img}  productName={product.name}  price={product.price} description= {product.description} /> 
                     <Booked  key={product.id} products={product.name} />*/}
                     </> 
                 )
             }) }
               
        </div>
    )
}

export default FetchBookings
