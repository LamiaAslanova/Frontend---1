import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'

const BasketTable = ({ infos }) => {
    return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Count</th>
                        <th scope="col">Add</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        infos.map((info, index) => {
                            return (
                                <BasketTableItem key={index} info={info} />
                            )
                        })
                    }
                </tbody>
            </table>
    )
}

export default BasketTable
