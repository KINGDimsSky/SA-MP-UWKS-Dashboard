import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import SignUpForm from './pages/SignUpForm'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signin' element={<LoginForm/>}/>
          <Route path='/signin' element={<LoginForm/>}/>
          <Route path='/signup' element={<SignUpForm/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App