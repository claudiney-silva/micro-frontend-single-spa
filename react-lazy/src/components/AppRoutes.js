import React, { Suspense } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

const About = React.lazy(() => import('../pages/About'))
const Contact = React.lazy(() => import('../pages/Contact'))
const Home = React.lazy(() => import('../pages/Home'))

const AppRoutes = () => (
    <Suspense fallback={<h2>Carregando...</h2>}>
        <BrowserRouter basename='react-lazy'>
            <Routes>
                <Route exact path='/' element = { <Home /> }></Route>
                <Route exact path='/about' element = { <About /> }></Route>
                <Route exact path='/contact' element = { <Contact /> }></Route>
            </Routes>
        </BrowserRouter>
    </Suspense>
)

export default AppRoutes