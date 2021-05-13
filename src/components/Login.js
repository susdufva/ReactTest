import React, {useState, useEffect} from 'react'
import axios from "axios"
import Bookingpage from "./Bookingpage"
import ForgotPW from "./ForgotPW"

export default function Login() {

  const initialValue = {
    email: "",
    password: ""
  }

  const [loginValue, setLoginValue] = useState(initialValue)
  const [error, setError] = useState("")
  const [confirm, setConfirm] = useState(false)
  const [username, setUsername] = useState("")
  const [jwt, setJwt] = useState("")

  function handleOnChange(e){
    setLoginValue({...loginValue, [e.target.name]:e.target.value})
  }

  useEffect(()=>{
    const JWT = localStorage.getItem("jwt")
    setJwt(JWT);
  }, [])

  function handleOnSubmit(e){
    e.preventDefault();

    axios.post('http://localhost:1337/auth/local', {
      identifier: loginValue.email,
      password: loginValue.password
    })
    .then(response =>{

      localStorage.setItem("jwt", response.data.jwt)

      console.log("inloggad: ", response.data);
      setUsername(response.data.user.username)
      setConfirm(true)
    })
    .catch( (err)=> {console.log(err); 
      setError("Fel användarnamn eller lösenord")})
  }

  return (
    <>
    {confirm ? <h2 className="mt-20 uppercase text-center font-semibold text-sm tracking-wide text-gray-800"> Välkommen {username} <Bookingpage/> </h2>   : 

<div className="flex flex-col h-screen">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <h2 className="text-center font-semibold text-3xl lg:text-xl text-gray-800">
                Logga in
            </h2>
            {error}
            <form className="mt-10" onSubmit={handleOnSubmit} method="POST">
                <input id="email" type="email" name="email" placeholder="e-mail" autocomplete="email" value={loginValue.email} onChange={handleOnChange}
                    className="block w-full py-3 px-1 mt-2 
                    text-gray-800 text-xs uppercase appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required />
                <input id="password" type="password" name="password" placeholder="lösenord" autocomplete="current-password" value={loginValue.password} onChange={handleOnChange}
                    className="block w-full py-3 px-1 mt-2 
                    text-gray-800 text-xs uppercase appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required />
                <button type="submit"
                    className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                    Logga in
                </button>
                <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-xs text-center">
                    <a href="forgot-password" className="flex-2 font-medium text-indigo-800 hover:text-indigo-700">
                        Glömt lösenord?
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
}
    </>
  )
}
