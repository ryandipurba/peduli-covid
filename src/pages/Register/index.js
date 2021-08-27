import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { bg_register } from '../../assets'
import './register.scss'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('')
  const [error, setError] = useState()

  const register = (event) => {
    const data = {
      name: name,
      username: username,
      email: email,
      password: password
    }
    event.preventDefault()
    axios.post('http://localhost:4000/auth/register', data)
      .then(result => {
        if (result) {
          if (result.data) {
            setAlert(result.data.message)
            setPassword('')
            setUsername('')
            setEmail('')
            setName('')
            setTimeout(() => {
              setAlert('')
            }, 3000)
          }
        }
      })
      .catch(e => {
        setError(e.response.data.message)
      })
  }


  return (
    <div className='register container'>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={bg_register} alt="thumb" className='img-fluid' />
        </div>
        <div className="col-md-6" >
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div>
                <h3>Sign in</h3>
                <p>Let's join on this website right now!</p>
              </div>
              {
                error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )
              }
              {
                alert && (
                  <div className="alert alert-primary" role="alert">
                    {alert}
                  </div>
                )
              }
              <form onSubmit={register}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) => { setName(e.target.value); setError('') }} />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => { setUsername(e.target.value); setError('') }} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value); setError('') }} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value); setError('') }} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
              </form>
              <div className="mt-4">
                <p className='mt-3'>already have an account?  <Link to='/login' className='font-weight-bold text-decoration-none text-dark'>Log in </Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
