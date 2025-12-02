import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './mainlayout/MainLayout'
import Home from './Home'
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/*' element={<MainLayout/>} >
      <Route index element={<Home/>} />
      </Route>
    </Routes>
   </Router>
  )
}

export default App