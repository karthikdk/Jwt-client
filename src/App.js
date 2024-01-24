import React from 'react'
import Registration from './components/Registration'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className='container-fluid'>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
     </Routes>
    </div>
  )
}

export default App
