import React, {useState, useEffect} from 'react';
import Profilefetch from './Profilefetch';
import axios from 'axios';


function UpdateProfile() {
 
    const initialValue = {
        email: "",
        password: ""
      }
    
      const [newValue, setNewValue] = useState(initialValue)
      const [error, setError] = useState("")

      function handleOnChange(e){
        setNewValue({...newValue, [e.target.name]:e.target.value})
      }

    
      function handleOnSubmit(e){
        e.preventDefault();
    
        axios.post('http://localhost:1337/auth/local', {
          identifier: newValue.email,
          password: newValue.password
        })
        .then(response =>{
    
          localStorage.setItem("username", response.data.user.username)
    
          console.log("inloggad: ", response.data);
    
        })
        .catch( (err)=> {console.log(err); 
          setError("Användarnamnet är upptaget")})
      }
    
        
    return (
        <>
            <div className="flex flex-row justify-center mt-20">
                <div>
                    <Profilefetch/>
                </div>
            
               
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <div className="w-80 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                <h2 className="py-2 text-center font-semibold text-md uppercase text-gray-800">
                    Ändra uppgifter
                </h2>
                {error}
                <form className="mt-10" onSubmit={handleOnSubmit} method="POST">
                    <input id="text" type="text" name="username" placeholder="användarnamn" value={newValue.username} onChange={handleOnChange}
                        className="block w-full py-3 px-1 mt-2 
                        text-gray-800 text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" />
                    <input id="email" type="email" name="email" placeholder="e-mail" value={newValue.email} onChange={handleOnChange}
                        className="block w-full py-3 px-1 mt-2 
                        text-gray-800 text-xs uppercase appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" />
                    <button type="submit"
                        className="w-9/12 py-2.5 mt-10 bg-gray-800 rounded-xl
                        font-medium text-white uppercase
                        focus:outline-none hover:bg-gray-700 hover:shadow-none">
                        Logga in
                    </button>
                </form>
            </div>
        </div>
    </div>
   
        </>
    )
}

export default UpdateProfile
