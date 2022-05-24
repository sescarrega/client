import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"


// 1. grab info from rute, then from backend when loading 
// the component

//2. backend axios

//3.when loading: useeffect 

//4. store the info from the backend : use state 

// route inside  frontend : params 

const Display = () => {
    const {id} = useParams()
    // id is from app js route 

    const [demo, setDemo] = useState()


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/find/${id}`)  // this id is from backend 
            .then(response =>{
                console.log(response.data)
                setDemo(response.data)
            }) // want to set the demo const 
            .catch(err => console.log (err))
    })

    return (
        <div>
            {demo &&
                <div>
                    <h3> product: {demo.title}</h3>
                    <p> price : {demo.price}</p>
                    <p> description : {demo.description}</p>
                </div>

            }
        </div>
    )
}

export default Display