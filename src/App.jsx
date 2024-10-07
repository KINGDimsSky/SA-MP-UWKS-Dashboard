import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import LoginForm from './Components/Form/LoginForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpForm from './Components/Form/SignUpForm'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/signup' element={<SignUpForm/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App