import React, {useState} from 'react'
import axios from "axios"
import Button2 from "./Button2"
import { Link } from 'react-router-dom'
import "./Form.css"

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
    const [fileData, setFileData] = useState();
    const [confirm, setConfirm] = useState(false)

    function handleOnChange(e){
        setNewProduct({...newProduct, [e.target.name]:e.target.value})
    }

    function handleOnChangeImage(e){
        setFileData(e.target.files[0])
    }

    function handleOnSubmit(e) {
        
        e.preventDefault();
    
        axios.post('https://strapi-booking3.herokuapp.com/products', {
            name: newProduct.name,
            price: newProduct.price,
            description: newProduct.description,
            
        }).then ( response => {
           console.log(response.data);
           const data = new FormData()
            data.append("files", fileData)
            data.append("ref", "product") //vilken collection tillhör bilden
            data.append("refId", response.data.id) //vilken produkt tillhör bilden
            data.append("field", "img") //vilken data i collection 
            axios.post('https://strapi-booking3.herokuapp.com/upload', data)
         .then( (image)=> console.log(image))
         .catch( (error)=> console.log(error))
           setConfirm(true)

        }) 
        .catch((error) => {console.log(error)}) 
    }
    return (
        <>
           {confirm ? <> 
          <div className="text-gray-400 text-md uppercase mt-24 mb-1">Uppladdningen lyckades! </div> 
          <Link className="text-center font-semibold text-sm text-gray-700 border-b-2 border-gray-200 hover:border-gray-500" to="/"> Tillbaka</Link>
           </> :
          <div className="Form">
            <form className="w-full max-w-sm" onSubmit={handleOnSubmit}>
                <label className="block w-full px-1 text-gray-400 text-xs uppercase text-left" >Produktnamn</label>
                <input className="block w-full mt-0.5 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200" type="text" placeholder="Produktnamn" name="name" value={newProduct.name} onChange={handleOnChange}aria-label="Full name" required /> 
                <input className="block w-full py-3 px-1 mt-2 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200" type="number" name="price" placeholder="pris" value={newProduct.price} onChange={handleOnChange} required />
                <input className="block w-full py-3 px-1 mt-2 text-gray-800 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200"  type="text" placeholder="Beskrivning" name="description" value={newProduct.description} onChange={handleOnChange} required />
                
                <input className="block w-full py-3 px-1 mt-2 text-gray-400 text-xs uppercase appearance-none border-b border-teal-500
                focus:text-gray-500 focus:outline-none focus:border-gray-200"  type="file" name="file" id="" onChange={handleOnChangeImage} required />
                
                <div className="flex justify-end mt-8">
                    {button.map( (button, id)=> {
                        return ( 
                        <Button2 key={id} button={button.button} /> ) 
                    } )}
                </div> 
            </form>
            </div>
            }
        
        </>
    )
}

export default UploadProduct
