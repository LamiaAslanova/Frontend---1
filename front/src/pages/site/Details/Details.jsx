import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import MainContext from '../../../context/context'

const Details = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    const {addToBasket} = useContext(MainContext)

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/products/${id}`)
        .then(res => {
            setItem(res.data)
        })
    }, [])

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-6">
                <img width="500px" height="500px" src={item.image}/>
            </div>
            <div className="col-6">
                <p>{item.title}</p>
                <p>{item.ingredients}</p>
                <p>{item.price}</p>
                <button onClick={()=>{addToBasket(item)}} className='btn btn-primary'>Add to basket</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details
