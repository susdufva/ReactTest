import axios from 'axios';
import React, {useState} from 'react'

function Upload() {

    const [fileData, setFileData] = useState();

    function handleOnChange(e) {
        setFileData(e.target.files[0])
    }

    function ImageUpload(e) {
        e.preventDefault();

        console.log(fileData)

        const formData = new FormData()
        formData.append("files", fileData)
        console.log(formData)

        const res = axios.post('http://localhost:1337/upload', formData) 
        console.log(res)

    }

    return (
        <>
          <form onSubmit={ImageUpload}>
              <input type="file" name="file" onChange={handleOnChange}>
              </input>
              <button>Click to submit</button>
          </form>  
        </>
    )
}

export default Upload
