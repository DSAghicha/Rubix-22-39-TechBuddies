import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './components'

import { Dashboard, ForgotPassword, Home, Login, Register, ResetPassword } from './pages'

ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path='/' element={ <Home/> }/>
            <Route exact path='/login' element={ <Login/> }/>
            <Route exact path='/register' element={ <Register/> }/>
            <Route exact path='/forgotpassword' element={ <ForgotPassword/> }/>
            <Route exact path='/passwordreset/:resetToken' element={ <ResetPassword/> }/>

            <Route exact path='/dashboard' element={<PrivateRoute/>}>
                <Route exact path='/dashboard/:userId' element={<Dashboard/>}/>
            </Route>
        </Routes>
    </Router>,
    document.getElementById('root')
)
