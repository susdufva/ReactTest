import React, {useState} from 'react'
import Button2 from "./Button2"
import Modal from "react-modal";
import axios from "axios"

const button = [
    {button:"Ändra / Avboka"}
]

function Bookingcard( {appointment, date} ) { //lägg till key i prpos?

    const userId = localStorage.getItem("userId") 
    const [modalIsOpen, setIsOpen] = useState(false);
    

    const customStyles = {
        content : {
          background: "white",
          height:"300px",
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function deleteBooking() {
        axios.delete(`http://localhost:1337/bookings?  `)
    }

    return (
        <>
    <div className="flex flex-col">
        <div className=" mx-2 my-20 ml-8 sm:my-auto">
            <div className="w-11/12 p-12 sm:w-11/12 md:w-11/12 lg:w-11/12 2xl:w-11/12
                px-6 py-10 sm:px-10 sm:py-5 
                bg-white rounded-lg shadow-md lg:shadow-lg">
             
                <div className="mt-10 m-2" >
               
                    <p className="block w-full py-2 px-2 mt-2 
                        text-gray-800 text-left text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200">
                         {appointment}
                        </p>
                    <p className="block w-full py-3 px-0.5 mt-2 
                        text-gray-800 text-left text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" > {date} </p>
                  <div className="mt-8 text-sm" onClick={openModal}>
                    {button.map( (button)=> {
                        return ( 
                        <Button2 button={button.button} /> ) 
                    } )} 
                    </div>
                    <Modal 
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div >

                        <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs py-1 px-3 rounded-xl font-medium" onClick={closeModal}>X</button>
                        
                        <form className="flex flex-col"  >
                            <label className="ml-3 mt-10 text-gray-400 text-xs uppercase"> Ändra tid:</label>
                            <input className="flex bg-gray-200 m-2" type="datetime-local" name="name" />
                            <button className="mt-6 bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-5 rounded-sm font-medium" type="submit">Bekräfta ändring</button>
                            <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-5 rounded-sm font-medium" onClick={deleteBooking}>Radera bokning</button>
                        </form>
                        
                        </div>
                    </Modal>
                    
                </div>
            </div>
        </div>
    </div>  
        </>
    )
}

export default Bookingcard
