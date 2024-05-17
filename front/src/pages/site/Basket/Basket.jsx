import BasketTable from '../../../components/site/BasketTable/BasketTable'
import React, { useContext } from 'react'
import MainContext from '../../../context/context'
const Basket = () => {
  const {basketItems} = useContext(MainContext)

  return (
    <BasketTable infos={basketItems}/>
  )
}

export default Basket
