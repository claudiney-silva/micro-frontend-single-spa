import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const AppRoutes = () => (
    <BrowserRouter basename='react-multiples'>
        <Routes>
            <Route exact path='/' element = { <Home /> }></Route>
            <Route exact path='/about' element = { <About /> }></Route>
            <Route exact path='/contact' element = { <Contact /> }></Route>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes