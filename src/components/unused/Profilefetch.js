import React, {useState, useEffect} from 'react';
import axios from "axios";
import ShowUpdate from './ShowUpdate';

function Profilefetch() {

    const [update, setUpdate] = useState([]);
    const userId = localStorage.getItem("userId");
    
        useEffect(()=>{
           
            const fecthBookings= async()=>{
               const response =   await axios.get(`http://localhost:1337/users/${userId}`)
               
               console.log("update", response)
               setUpdate(response.data)
            }
    
            fecthBookings();
    
        }, [])

        return update ? <ShowUpdate username={update.username} email={update.email} /> : null
}

export default Profilefetch
