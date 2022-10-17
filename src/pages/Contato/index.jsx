import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'

/* verifica a validade do usuário */
/* redireciona para rota de login */
/* Router V6 - Outlet */

const Contato = () => {
  return (
    <ProtectedRoute>
        <h1>Contato</h1>
    </ProtectedRoute>    
  )
}

export default Contato