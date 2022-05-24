import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const[products, setProducts] = useState([])
    const[errors, setErrors] = useState()

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/demos") // this gets all 
        .then(response =>{
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(err=> console.log(err))

    },[])

    const createProduct = product =>{
        axios.post("http://127.0.0.1:8000/api/create", product)
        .then(res=>{
            console.log(res.data)
            setProducts([...products, res.data])
        })
        .catch(err=>{
            setErrors(err.response.data.errors)
            console.log(err)
        } )

    }
     // server side is coming from demo  name 

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/delete/${id}`)
        .then(res => {
            const filteredList = products.filter((product, idx)=> product._id !== id )
            setProducts(filteredList)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1> hello from dashboard </h1>
            <ProductForm onSubmitProp={createProduct} errors={errors}/>
            
            <div> 
                <table> 
                    <thead>
                        <tr>
                            <th> Products</th>
                            <th>Price </th>
                            <th colSpan={2}> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, idx)=>(
                            <tr key={idx}>
                                <td><Link to={`/display/${product._id}`}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link to ={`/display/${product._id}/edit`}> edit</Link></td>
                                <td> <button onClick={()=> handleDelete(product._id)}> delete</button></td>

                            </tr> 
                        )
                        )}

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Dashboard