/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { RouterContext } from '../../contexts/RouterContext';
import { UserContext } from '../../contexts/UserContext'

const ProtectedRoute = ({children}) => {
  const { user } = useContext(UserContext);  
  const { navigate } = useContext(RouterContext);

  useEffect(() => {
    if(!user){
        navigate("/")
    }
  }, [])
  
  return (
    <>
        {user && children}
    </>
  )
}

export default ProtectedRoute