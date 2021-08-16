import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';


function UpdateProfile() {
 
    const initialValue = {
        email: "",
        password: ""
      }
    
      const [newValue, setNewValue] = useState(initialValue)
      const [error, setError] = useState("")
      const history = useHistory()
      const [userid] = localStorage.getItem("userId")

      useEffect(() => {
        axios.get(`http://localhost:1337/users/${userid}`)
        .then(res => {
            setNewValue({
                username: res.data.username,
                email: res.data.email,
            })
        })
    }, [])

      function handleOnChange(e){
        setNewValue({...newValue, [e.target.name]:e.target.value})
        console.log(newValue.username, newValue.email)
      }

    
      function handleOnSubmit(e){
        e.preventDefault();
    
        axios.put(`http://localhost:1337/users/${userid}`, 
            newValue
        ).then((response) =>{
            console.log("nytt namn: ", response.data);
            localStorage.setItem("username", response.data.username)
          
        }).then(() =>{
            setNewValue(initialValue)
            history.push("/bookingpage")
        })
        .catch( (err)=> {console.log(err); 
          setError("Användarnamnet är upptaget")})
      }
    
        
    return (
        <>
            <div className="flex flex-row justify-center mt-20">
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <div className="w-96 h-96 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                <h2 className="py-2 text-center font-semibold text-md uppercase text-gray-800">
                    Ändra dina uppgifter
                </h2>
                {error}
                <form className="mt-12" onSubmit={handleOnSubmit} method="POST">
                    <input id="text" type="text" name="username" placeholder="användarnamn" value={newValue.username} onChange={handleOnChange}
                        className="block w-full py-3 px-1 mt-2 
                        text-gray-800 text-sm uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" />
                    <input id="email" type="email" name="email" placeholder="e-mail" value={newValue.email} onChange={handleOnChange}
                        className="block w-full py-3 px-1 mt-4 
                        text-gray-800 text-sm uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" />
                    <button type="submit"
                        className="w-9/12 py-2.5 mt-16 bg-gray-800 rounded-xl
                        font-normal text-white uppercase tracking-wide
                        focus:outline-none hover:bg-gray-700 hover:shadow-none">
                        uppdatera
                    </button>
                </form>
            </div>
        </div>
    </div>
   
        </>
    )
}

export default UpdateProfile
