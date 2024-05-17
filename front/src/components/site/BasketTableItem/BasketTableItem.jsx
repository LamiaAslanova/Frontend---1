import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const BasketTableItem = ({ info }) => {
    const {removeFromBasket, increaseBasket} = useContext(MainContext)

    return (
        <tr>
            <td>{info.item.image}</td>
            <td>{info.item.title}</td>
            <td>{info.item.price}</td>
            <td><button onClick={()=>removeFromBasket(info)} className='btn btn-danger'>Remove</button></td>
            <td>{info.count}</td>
            <td><button onClick={()=>increaseBasket(info)} className='btn btn-primary'>Add</button></td>
            <td>${info.totalPrice}</td>
        </tr>
    )
}

export default BasketTableItem
