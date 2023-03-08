import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import LoginDoc from './components/LoginDoc'
import SignUpDoc from './components/SignUpDoc'
import DocHome from './pages/DocHome'
import ViewUser from './pages/ViewUser'
import EditUser from './pages/EditUser'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/patient/sign-in'}>
                    PATIENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/patient/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/doctor/sign-in'}>
                    DOCTOR
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/doctor/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/patient/sign-in" element={<Login />} />
              <Route path="/patient/sign-up" element={<SignUp />} />
              <Route path="/doctor/sign-in" element={<LoginDoc/>} />
              <Route path="/doctor/sign-up" element={<SignUpDoc />} />
              <Route path="/doctor/home" element={<DocHome />} />
              <Route path="/viewuser" element={<ViewUser/>} />
              <Route path="/edituser" element={<EditUser/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
