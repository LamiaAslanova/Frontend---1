import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Cards from '../../../components/site/Cards/Cards'
import './Home.css'

const Home = () => {
    const {data} = useContext(MainContext)

  return (
        <div className="home">
            <Cards cards={data}/>
        </div>
  )
}

export default Home