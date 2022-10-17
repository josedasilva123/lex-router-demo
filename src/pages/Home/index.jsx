import React, { useContext } from 'react'
import { RouterContext } from '../../contexts/RouterContext'

const Home = () => {
  const { getParams } = useContext(RouterContext);  
  return (
    <div>
        <h1>Home</h1>
        <button onClick={() => console.log(getParams())}>Parâmetros</button>
    </div>
  )
}

export default Home