import React, { useState } from 'react'

const ProductForm = (props) => {
  const {intialTitle, intitalPrice, intitalDescription, onSubmitProp} =props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

  const handleSubmit= e =>{
    e.preventDefault();
    onSubmitProp({title , price, description})
  }

  return (
    <div>
      <h1> Add a product !</h1>
      <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="">Title:</label>
            <input type="text" name="" id="" value={title} onChange={e=>setTitle(e.target.value)} />
        </p>
        <p>
            <label htmlFor="">Price:</label>
            <input type="text" name="" id="" value={price} onChange={e=>setPrice(e.target.value)}/>
        </p>
        <p>
            <label htmlFor="">Description:</label>
            <input type="text" name="" id="" value={description} onChange={e=>setDescription(e.target.value)}/>
        </p>
        <button type="submit">Submit</button>
    </form>
    {
      props.errors &&
      Object.keys(props.errors).map((error, i)=>{
        return <p key={i}> {props.errors[error].message}</p>
      })
    }
    </div>
  )
}

export default ProductForm