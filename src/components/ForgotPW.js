import React, {useEffect} from 'react'
import axios from "axios"

function ForgotPW() {

    function reset(){
        
        axios.post('http://localhost:1337/auth/forgot-password', {
            email: 'user@strapi.io', // user's email initialValues osv 
        })
        .then(response => {
            console.log('Your user received an email');
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
    }
    return (
        <div>
            återställ lösenord button onClick - lägg i login med function i login
            funkar a? onload? link on click?
        </div>
    )
}

export default ForgotPW
