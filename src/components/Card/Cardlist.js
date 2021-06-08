import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "./Card"


function CardList() {

    // useState for products 
    const [products, setProducts] = useState([]);
    const [loadPage, setLoadPage]= useState(6);

    useEffect(()=>{
       // useEffect för att kunna hämta data från database 
        const fecthProducts= async()=>{
           const response = await axios.get(`http://localhost:1337/products?_limit=${loadPage}`)
           console.log(response)

           setProducts(response.data)
        }

        fecthProducts();

    }, [loadPage])

    function showMore() {
        console.log("längd", products.length)

        let dynamicPage = loadPage + 6;
        setLoadPage(dynamicPage)
    }

    function showLess(){
        setLoadPage(6)
    }

    return (
        <div className="grid grid-cols-3 gap-1 mt-4">
            
             {products.map((product)=>{
                 return (
                     <Card key={product.id} productId={product.id} image={product.img}  productName={product.name}  price={product.price} description= {product.description} /> 
                 )
                 
             }) }
             
             {(products.length > loadPage || products.length === loadPage)  ? 
            <div className=" col-start-1 col-end-4 mb-7 m-2">
               <button onClick={showMore} className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white tracking-wide text-xs font-medium uppercase rounded">Visa fler</button> 
            </div>
               :
            <div  className=" col-start-1 col-end-4 mb-7 m-2">
               <button onClick={showLess} className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white tracking-wide text-xs font-medium uppercase rounded">Visa mindre</button> 
            </div> } 

        </div> 
        
    )
}
export default CardList