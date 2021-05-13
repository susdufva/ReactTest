import React, {useState} from 'react'
import axios from "axios"
import Button2 from "./Button2"
import { Link } from 'react-router-dom'
import "./Form.css";

const button = [
    {button:"Ladda upp"},
]


function UploadProduct() {

    const initialValue = {
        name: " ",
        price: " ",
        description:""
    }

    const [newProduct, setNewProduct] = useState(initialValue)
    const [confirm, setConfirm] = useState(false)

    function handleOnChange(e){
        setNewProduct({...newProduct, [e.target.name]:e.target.value})
    }

    function handleOnSubmit(e) {
        
        e.preventDefault();
    
        axios.post('http://localhost:1337/products', {
            name: newProduct.name,
            price: newProduct.price,
            description: newProduct.description,
            
        }).then ( response => {
           console.log(response.data);
           setConfirm(true)
        }) 
        .catch((error) => {console.log(error)}) 
    }
    return (
        <>
           <div className="Form">
           {confirm ? <> <p className="text-gray-400 text-md uppercase">Uppladdningen lyckades! </p> <br/> <Link to="/" className="text-gray-500 uppercase font-semibold text-md">Tillbaka </Link>   </>:
            <form className="w-full max-w-sm" onSubmit={handleOnSubmit}>
                <label className="block w-full px-1 text-gray-400 text-xs uppercase text-left" >Produktnamn</label>
                <input className="block w-full mt-0.5 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200" type="text" placeholder="Produktnamn" name="name" value={newProduct.name} onChange={handleOnChange}aria-label="Full name" required /> 
                <input className="block w-full py-3 px-1 mt-2 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200" type="number" name="price" placeholder="pris" value={newProduct.price} onChange={handleOnChange} required />
                <input className="block w-full py-3 px-1 mt-2 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200"  type="text" placeholder="Beskrivning" name="description" value={newProduct.description} 
                    onChange={handleOnChange} aria-label="Full name" />
                
                <div className="flex justify-end mt-8">
                    {button.map( (button)=> {
                        return ( 
                        <Button2 button={button.button} /> ) 
                    } )}
                </div> 
            </form>
            }
        </div>

     
        </>
    )
}

export default UploadProduct
