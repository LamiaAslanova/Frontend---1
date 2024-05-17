import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ROUTES from "./routes/routes"
import MainContext from "./context/context"
import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'

function App() {
  const routes = createBrowserRouter(ROUTES)
  const [data, setData] = useState([])
  const [basketItems, setBasketItems] = useState(localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')) : [])

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => {
        setData([...res.data]);
      })
  }, [])

  const addToBasket = (item) => {
    const target = basketItems.find(x => x.item._id == item._id)
    if (!target) {
      let newBasketItem = {
        item: item,
        count: 1,
        totalPrice: item.price
      }
      setBasketItems([...basketItems, newBasketItem])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems, newBasketItem]))
    }
    else {
      target.count += 1
      target.totalPrice += item.price
      setBasketItems([...basketItems])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
    }
  }

  const removeFromBasket = (item) => {
    const target = basketItems.find(x => x.item._id == item.item._id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice -= item.item.price
      setBasketItems([...basketItems])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
    }
    else {
      setBasketItems([...basketItems.filter(x => x.item._id !== item.item._id)])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems.filter(x => x.item._id !== item.item._id)]))
    }
  }

  const increaseBasket = (item) => {
    const target = basketItems.find(x => x.item._id == item.item._id)
      target.count += 1
      target.totalPrice += item.item.price
      setBasketItems([...basketItems])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
  }

  const contextData = {
    data, setData, basketItems, setBasketItems, addToBasket, removeFromBasket, increaseBasket
  }

  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </>
  )
}

export default App