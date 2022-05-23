import React, {useState, useEffect} from 'react'
import axios from "axios"

// get info from backend
//1. axios to get info 
// state
// use stats

const ViewTest = () => {
  const [message, setMessage] =useState()

  useEffect(()=> {
    axios.get("http://localhost:8000/test")
      .then(response => {
        setMessage(response.data)
        console.log(response.data)
      })//sucessful 
      .catch(err => console.log(err))// unscuessful

  },[])
  return (
    <div>
      <p> hello from view test </p>
      {
        message?
        <h1> {message}</h1>
        :
        <h1> loading</h1>

      };

    </div>
  )
}

export default ViewTest