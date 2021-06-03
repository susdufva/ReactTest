import React, {useState, useEffect} from 'react'
import db from "./FirebaseConfig"

function FirebaseData() {

    const[firebaseData, setFirebaseData] = useState("")
    useEffect(()=> {
        const fetchFirestore = async()=> {
            const res = await db.collection("test").doc("gXeQQ5p6E1czRiaBzQNP").get() 

            setFirebaseData(res.data().name)
            console.log(res.data().name)
        }
        fetchFirestore();
    }, [])

    const[firebaseData2, setFirebaseData2] = useState("")
    useEffect(()=> {
        const fetchFirestore = async()=> {
            const res = await db.collection("test").doc("gXeQQ5p6E1czRiaBzQNP").get() 

            setFirebaseData2(res.data().test)
            console.log(res.data().test)
        }
        fetchFirestore();
    }, [])

    function writeFirebaseData() {

    }

    return (
        <>
            {"firebasedata:", firebaseData}
            <br/>
            <button onClick={writeFirebaseData}>Skriv in i firebase</button>
            <br/>
            {"firebasedata:", firebaseData2}
        </>
    )
}

export default FirebaseData
