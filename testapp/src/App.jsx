import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import FirstPage from './component/FirstPage'
import Login from './component/Login'
import Signup from './component/Signup'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path ='/signup' element ={<Signup/>}/>
    <Route path ="/firstpage" element ={<FirstPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
