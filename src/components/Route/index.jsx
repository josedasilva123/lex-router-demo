import React, { useContext } from 'react'
import { RouterContext } from '../../contexts/RouterContext'

const Route = ({ element, path }) => {
  const { currentRoute } = useContext(RouterContext);  
  return (
    <>
        {path === currentRoute.pathname && element}
    </>
  )
}

export default Route