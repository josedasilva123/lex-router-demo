/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import { RouterContext } from '../../contexts/RouterContext'

const Link = ({ children, to }) => {
  const { navigate } = useContext(RouterContext);  
  
  return (
    <a onClick={() => navigate(to)}>
        {children}
    </a>
  )
}

export default Link