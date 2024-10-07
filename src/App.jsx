import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import SignUpForm from './pages/SignUpForm'
import Landing from './pages/Landing'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signin' element={<LoginForm/>}/>
          <Route path='/signin' element={<LoginForm/>}/>
          <Route path='/signup' element={<SignUpForm/>}/>
          
        </Route>
      </Routes>
    </Router>
  )
}

export default App