import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "./Card"


function CardList() {

    // useState for products 
    const [products, setProducts] = useState([]);

    useEffect(()=>{
       
        const fecthProducts= async()=>{
           const response =   await axios.get("http://localhost:1337/products")
           console.log(response)

           setProducts(response.data)
        }


        fecthProducts();

    }, [])

    // useEffect för att kunna hämta data från database 

    return (
        <div className="grid grid-cols-3 gap-2 mt-4">
            
             {products.map((product)=>{
                 return (
                     <Card key={product.id} image={product.img}  productName={product.name}  price={product.price} description= {product.description} />
                 )
             }) }
               
        </div>
    )
}
export default CardList