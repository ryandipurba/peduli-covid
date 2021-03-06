import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { bg_register } from '../../assets'
import './register.scss'

const Register = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('')
  const [error, setError] = useState()

  const register = async (event) => {
    const data = {
      name: name,
      username: username,
      email: email,
      password: password,
      tipe: "user"
    }
    event.preventDefault()
    await axios.post('https://peduli-covid-api.herokuapp.com/auth/register', data)
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
              history.push('/login')
            }, 1000)
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
                <h3>Sign Up</h3>
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
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) => { setName(e.target.value); setError('') }} required />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => { setUsername(e.target.value); setError('') }} minLength="6" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value); setError('') }} required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value); setError('') }} required minLength='8' />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
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
