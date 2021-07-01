import React, {useState, useEffect} from 'react';
import axios from "axios"


function ProfilepictureFetch() {

    const [pictures, setPictures] = useState([]);
    const userId = localStorage.getItem("userId")

    useEffect(()=>{
       
        const fecthPictures= async()=>{
           const response =   await axios.get(`http://localhost:1337/users/${userId}`)
           
           console.log("image", response)
           setPictures(response.data)

        }

        fecthPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="">
            {pictures.map((user)=>{
                return(
                    <ProfileSidebar key={user.id} id={user.id} picture={user.image} />
                )
            })}
              
       </div> 
        </>
    )
}

export default ProfilepictureFetch
