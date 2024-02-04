import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Teacher from '../Components/Teacher'
import Home from './Home'
import Login from './Login'
import { Addbook } from '../Components/Addbook'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Teacher/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/books/create' element={<Addbook/>}/>
        <Route path='/*' element={<h1>Page not exist</h1>}/>
    </Routes>
  )
}

export default Allroutes