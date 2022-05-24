import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams, useNavigate} from "react-router-dom"


export const Update = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/find/${id}`)
        .then(res =>{
            const product = res.data 
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch(err => console.log(err))
    }, [])
    
    const handleSubmit = (e => {
        e.preventDefault()
        axios.put(`http://127.0.0.1:8000/update/${id}`, {title, price, description})
            .then(res => navigate(`/dash`))
            .catch(err => console.log(err))
    })

    const handleDelete=()=>{
        axios.delete(`http://127.0.0.1:8000/delete/${id}`)
        .then(res => navigate(`/dash`))
        .catch(err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> title</label>
                <input type="text" name='title' value={title} onChange={e =>setTitle(e.target.value)}/>
                <label> price</label>
                <input type="text" name='price' value={price} onChange={e =>setPrice(e.target.value)}/>
                <label> description</label>
                <input type="text" name='description' value={description} onChange={e =>setDescription(e.target.value)}/>
                <button type='submit'>  edit </button>

                <p> would you like to delete this entry? </p>
                <button onClick={handleDelete}> Delete</button>

            </form>
        </div>
    )
}
