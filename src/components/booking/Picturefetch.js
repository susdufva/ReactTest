import React, {useState, useEffect} from 'react'
import axios from "axios"
import ProfileSidebar from './ProfileSidebar'


function Picturefetch() {

    const [picture, setPicture] = useState()
    const [userId] = localStorage.getItem("userId")

    useEffect(()=>{

        const fetchPictures = async()=>{

            const response = await axios.get(`https://strapi-booking3.herokuapp.com/users/${userId}`)
            
            console.log("res", response);
            setPicture(response.data.image);
        }
        fetchPictures();
    }, [])

    return picture ? <ProfileSidebar picture={picture} /> : <ProfileSidebar/>
}

export default Picturefetch
