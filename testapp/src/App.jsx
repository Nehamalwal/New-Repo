import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router'
import FirstPage from './component/FirstPage'
import Login from './component/Login'
import Signup from './component/Signup'
import Usestate from './component/Usestate'
import Array_task from './component/Array_task'
import ContactPage from './component/ContactPage'
import AntdForm from './component/AntdForm'

const App = () => {
  return (
    // <Usestate/>
    // <Array_task/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path ='/signup' element ={<Signup/>}/>
    <Route path ="/firstpage" element ={<FirstPage/>}/>
    <Route path ="/antdform" element ={<AntdForm/>}/>
   </Routes>
   </BrowserRouter>
  
  
  )
}

export default App
