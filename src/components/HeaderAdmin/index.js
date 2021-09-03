import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { logo } from '../../assets'
import './header.scss'

const HeeaderAdmin = () => {
 const history = useHistory()
 const handleClearStorage = () => {
  if (sessionStorage.token) {
   sessionStorage.removeItem("token");
   sessionStorage.removeItem("userId");
   history.push('/')
   window.location.reload();
  }
 }

 return (
  <div className='container-fluid bg-light'>
   <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light ">
     <div className="container-fluid">
      <Link className="navbar-brand" to='/'><img src={logo} alt="logo" className='logo' /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link active" to='/'>Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active" to='/help/admin/posts'>Minta Bantuan</Link>
        </li>
        <li>
         <Link className="nav-link" onClick={handleClearStorage} to="/">Log out</Link>
        </li>
       </ul>
      </div>
     </div>
    </nav>
   </div >
  </div >
 )
}

export default HeeaderAdmin
