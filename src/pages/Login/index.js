import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { bg_login } from '../../assets'
import './login.scss'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  const history = useHistory()

  const login = async (event) => {
    const data = {
      username: username,
      password: password
    }
    event.preventDefault()
    await axios.post('http://localhost:8000/auth/login', data)
      .then(result => {
        if (result) {
          if (result.data) {
            console.log(result.data);
            setPassword('')
            setUsername('')
            // simpann token ke local storage
            sessionStorage.setItem("token", result.data.token);
            if (sessionStorage.token) {
              history.push("/");
              window.location.reload();
            }
          }
        }
      })
      .catch(e => {
        setError(e.response.data.message)
      })
  }
  return (
    <div className='login container'>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={bg_login} alt="thumb" className='img-fluid' />
        </div>
        <div className="col-md-6" >
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div>
                <h3>Log in</h3>
                <p>Please login to your account</p>
              </div>
              {
                error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )
              }
              <form onSubmit={login}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" value={username} onChange={(e) => { setUsername(e.target.value); setError('') }} required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value); setError('') }} required />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="remember-me" />
                  <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                </div>
                <button className="btn btn-primary btn-lg btn-block">Log In</button>
              </form>
              <div className="mt-4">
                <p className='mt-3'>don't have an account yet? <Link to='/register' className='font-weight-bold text-decoration-none text-dark'>Daftar</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Login
