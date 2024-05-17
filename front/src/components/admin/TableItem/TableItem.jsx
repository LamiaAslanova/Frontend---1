import axios from 'axios'
import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const TableItem = ({item}) => {
    const {setData} = useContext(MainContext)

    return (
        <tr>
            <th scope="row">{item._id}</th>
            <td>{item.title}</td>
            <td>{item.ingredients}</td>
            <td>${item.price}</td>
            <td><img width="80px" height="80px" src={item.image} alt="" /></td>
            <td>{item.category}</td>
            <td><button onClick={() => {
                axios.delete(`http://localhost:8080/api/products/${item._id}`)
                .then(res => {
                    setData([...res.data])
                })
            }} className='btn btn-danger'>Delete</button></td>
        </tr>
    )
}

export default TableItem
