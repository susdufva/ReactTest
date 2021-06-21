import React, {useState, useEffect} from 'react';
import axios from "axios"
import Profile from "./ProfileSidebar"

function ProfilepictureFetch() {

    const [pictures, setPictures] = useState([])
    const userId = localStorage.getItem("userId")

    useEffect(()=>{
       
        const fecthPictures= async()=>{
           const response =   await axios.get(`http://localhost:1337/users/${userId}`)
           
           console.log("image", response)
           setPictures(response.data)

        }

        fecthPictures();

    }, [])

    return (
        <>
            <div className="">
            
            {pictures.map((user)=>{
                return (
                    <Profile key={user.id} userId={user.id} picture={user.image}   />
                )
            }) }
              
       </div> 
        </>
    )
}

export default ProfilepictureFetch
