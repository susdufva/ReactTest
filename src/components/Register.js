import axios from 'axios'
import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import Bookingpage from "./booking/Bookingpage"

function Register() {

    const initialValue = {
        username: " ",
        email: " ",
        password:""
    }

    const [registerValues, setRegisterValues] = useState(initialValue)
    const history = useHistory()
    const jwt = localStorage.getItem("jwt")

    function handleOnChange(e) {

        setRegisterValues({...registerValues, [e.target.name]:e.target.value})
        //controlled element
    }

    function handleOnSubmit(e) {
        
        e.preventDefault();
        // vi ska skicka user registration data till strapi / endpoint 
        axios.post('https://strapi-booking3.herokuapp.com/auth/local/register', {
            username: registerValues.username,
            email: registerValues.email,
            password: registerValues.password,
            //promises iställer för async await
        }).then ( (e)=> {if(e.data.user) history.push("/login")
            
        }) 
        .catch((err) => {console.log(err.response)}) 
    }

    return (
        <>
        {jwt ? <Bookingpage/>   : 

    <div className="flex flex-col h-screen">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <h2 className="mb-2 text-center font-semibold text-3xl lg:text-xl text-gray-800">
                Registrera dig
            </h2>
            <span className="text-xs py-2 text-gray-800 text-left">
                Redan registrerad?<Link className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500" to="/login"> Logga in</Link> direkt
            </span>

            <form className="mt-10" onSubmit={handleOnSubmit} method="POST">
                <label className="block w-full text-gray-400 text-xs uppercase text-left" >Användarnamn</label>
                <input className="block w-full mt-0.5 text-gray-800 text-xs uppercase appearance-none border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200" type="text" name="username" placeholder="användarnamn" 
                value={registerValues.username} onChange={handleOnChange} 
                required />
                <input id="email" type="email" name="email" placeholder="e-mail"  value={registerValues.email} onChange={handleOnChange}
                    className="block w-full py-3 px-1 mt-2 
                    text-gray-800 text-xs uppercase appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required />
                <input id="password" type="password" name="password" placeholder="lösenord" value={registerValues.password} onChange={handleOnChange}
                    className="block w-full py-3 px-1 mt-2 
                    text-gray-800 text-xs uppercase appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required/>
                <input id="password" type="password" name="password" placeholder="Bekräfta lösenord" 
                    className="block w-full py-3 px-1 mt-2 
                    text-gray-800 text-xs uppercase appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required/>
            <div className="flex justify-start">
                <label className="block text-gray-500 font-bold my-4 flex items-center mt-7">
                    <input className="leading-loose text-pink-600 top-0" type="checkbox"/>
                    <span className="ml-2 text-xs py-2 text-gray-600 text-left">Acceptera 
                    <a href="#" className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> Allmänna villkor </a> 
                    och 
                    <a href="#" className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> integritetspolicy </a>
                    </span>
                </label>
            </div>
                <button type="submit"
                    className="w-full py-3 mt-4 bg-gray-800 
                    font-medium tracking-wide text-white uppercase 
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                    Registrera
                </button> 
            </form>
        </div>
    </div>
</div> }
        </>
    )
}

export default Register
