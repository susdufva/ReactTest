import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

export default function Login() {

  const initialValue = {
    email: "",
    password: ""
  }

  const [loginValue, setLoginValue] = useState(initialValue)
  const [error, setError] = useState("")
  const [jwt, setJwt] = useState("")
  const history = useHistory();

  function handleOnChange(e){
    setLoginValue({...loginValue, [e.target.name]:e.target.value})
  }

  useEffect(()=>{
    const JWT = localStorage.getItem("jwt")
    setJwt(JWT);
  }, [])

  function handleOnSubmit(e){
    e.preventDefault();

    axios.post('https://strapi-booking3.herokuapp.com/auth/local', {
      identifier: loginValue.email,
      password: loginValue.password
    })
    .then(response =>{

      localStorage.setItem("jwt", response.data.jwt)
      localStorage.setItem("userId", response.data.user.id)
      localStorage.setItem("admin", response.data.user.admin)
      localStorage.setItem("username", response.data.user.username)

      console.log("inloggad: ", response.data);

      history.push("/Bookingpage")
      window.location.reload();
    })
    .catch( (err)=> {console.log(err); 
      setError("Fel användarnamn eller lösenord")})
  }

  function reset(){  //reset password, onclick function
        
    axios.post('https://strapi-booking3.herokuapp.com/auth/forgot-password', {
        email: loginValue.email
    })
    .then(response => {
        console.log('Your user received an email');
    })
    .catch(error => {
        console.log('An error occurred:', error.response);
    });
}

  return (
    <> 

    <div className="flex flex-col h-screen">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                <h2 className="text-center font-semibold text-3xl lg:text-xl text-gray-800">
                    Logga in
                </h2>
                {error}
                <form className="mt-10" onSubmit={handleOnSubmit} method="POST">
                    <input id="email" type="email" name="email" placeholder="e-mail" value={loginValue.email} onChange={handleOnChange}
                        className="block w-full py-3 px-1 mt-2 
                        text-gray-800 text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" />
                    <input id="password" type="password" name="password" placeholder="lösenord" value={loginValue.password} onChange={handleOnChange}
                        className="block w-full py-3 px-1 mt-2 
                        text-gray-800 text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" />
                    <button type="submit"
                        className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                        font-medium text-white uppercase
                        focus:outline-none hover:bg-gray-700 hover:shadow-none">
                        Logga in
                    </button>
                    <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 
                         text-xs text-center">
                        <button onClick={reset} className="flex-2 font-medium    text-indigo-800 hover:text-indigo-700">
                            Glömt lösenord?
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    </>
  )
}
