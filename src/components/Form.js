import React from 'react'
import Button from "./Button"
import "./Form.css";

const button = [
    {button:"Bekräfta bokning"},
  
]

function Form() {
    return (
        <>
        <div className="Form">
        <form class="w-full max-w-sm">
        <div class="flex items-center border-b border-teal-500 py-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ditt namn" aria-label="Full name" />
        </div>
        <div class="flex items-center border-b border-teal-500 py-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Telefonnummer" aria-label="Full name" />
        </div>
        <div class="flex items-center border-b border-teal-500 py-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Önskad tid" aria-label="Full name" />
        </div>
        </form>
        </div>

        <div className="Form-button">
              {button.map( (button)=> {
                return ( 
                <Button button={button.button} /> ) 
            } )}
        </div>
        

        </>
        
    )
}

export default Form
