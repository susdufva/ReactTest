import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import axios from "axios"
import Modal from "react-modal"
import Contact from "./Contact"

const username = localStorage.getItem("username")
console.log(username)

function ProfileSidebar({ picture}) {

    const history = useHistory()
    const [fileData, setFileData] = useState()
    const [id] = localStorage.getItem("userId")
    const [modalIsOpen, setIsOpen] = useState(false)
    const [confirm, setConfirm] = useState("")

    function Logout(){
      localStorage.clear()
      history.push("/")
      window.location.reload();
    }

    function handleImage(e){
        setFileData(e.target.files[0])
    }

    function handleOnSubmit(e){
        e.preventDefault()
            const data = new FormData()
            data.append("files", fileData)
            data.append("ref", "user") //vilken collection tillhör bilden
            data.append("refId", id) //vilken användare tillhör bilden
            data.append("source", "users-permissions")
            data.append("field", "image") //vilket fält i collection
            axios.post('http://localhost:1337/upload', data)
            .then(res => {
                console.log("res", res)
                setConfirm("Din bild har laddats upp")
            })
        
    }

    const customStyles = {  //style för modal
        content : {
          background: "white",
          height:"230px",
          width:"290px",
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
    
    function deleteUser() {
        axios.delete(`http://localhost:1337/users/${id}`)
        localStorage.clear()
        history.push("/")
    }
    
    return (
        <>
          
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
        <div className="flex flex-row bg-gray-50">
        <div className="flex flex-col min-h-screen w-56 shadow-md mt-1 bg-white rounded-r-3xl overflow-hidden">
            <div className="flex items-center justify-center h-28 shadow-md">
                {
                    picture ? 
                <div className="w-1/2">
                    <img className="mx-auto w-20 h-20 rounded-full" src={`http://localhost:1337${picture.formats.thumbnail.url}`} alt="profilepicture"/>
                </div>
                : <div className="w-1/2">
                    <img className="mx-auto w-20 h-20 rounded-full" src={require("../img/profil.png").default} alt="profilenull" /> 
                    </div>
                }
                    <span className="font-semibold text-sm uppercase text-gray-800">{username}</span>  
            </div>
            <ul className="flex flex-col py-4">
            <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                <span className="text-sm font-medium">Dashboard</span>
                </a>
            </li>
            <li>
                <a href={<Contact/>} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                <span className="text-sm font-medium">Shopping</span>
                </a>
            </li>
            <li>
                <Link to="/contact" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                <span className="text-sm font-medium">Kontakt</span>
                </Link>
            </li>
            
            <li>
                <button onClick={openModal} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                <span className="text-sm font-medium">Profilbild</span>
                </button>
            </li>
            <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
            
            <div className="block w-full px-1 text-gray-600 text-sm ">   
                    <button className="mb-8 bg-gray-700 hover:bg-gray-600 text-white text-xs py-0.5 px-2 rounded-xl font-normal" onClick={closeModal}>X</button>
                    <p>Ladda upp din profilbild:</p>
               <form className="mt-3"onSubmit={handleOnSubmit}>
                   <input type="file" name="file" id="" onChange={handleImage}></input>
                   <button className="mt-6 px-3 py-1 bg-gray-700 text-white text-xs tracking-wider font-medium rounded-lg hover:bg-gray-800" type="submit">Ladda upp</button>
               </form>
               <p className="mt-2">{confirm}</p>
               </div>
            </Modal>
            <li>
            <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800" href="#">
                    <svg className="inline-flex items-center justify-center h-5 w-12 text-lg text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <span className="text-sm font-medium">Inställningar</span>
                </a>
            </li>
            <li>
                <button onClick={deleteUser} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                <span className="text-sm font-medium text-red-500">Radera konto</span>
                </button>
            </li>
            <li>
                <a onClick={Logout} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <button className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></button>
                <button className="text-sm font-medium">Logga ut</button>
                </a>
            </li>
            </ul>
        </div>
        </div>  
        </>
    )
}

export default ProfileSidebar
