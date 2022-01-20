import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'

const PrivateRoute = () => {
    return localStorage.getItem('authToken') ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoute
