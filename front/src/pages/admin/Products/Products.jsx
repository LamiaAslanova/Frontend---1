import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Table from '../../../components/admin/Table/Table'

const Products = () => {
    const {data} = useContext(MainContext)

  return (
    <Table items={data}/>
  )
}

export default Products
