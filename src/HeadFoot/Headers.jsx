
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { LOGOUT } from '../LOGIN/LoginSlice';


function Headers() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    dispatch(LOGOUT());
    navigate("/"); 
  };
  return (
   
    <nav class="navbar">
    <div class="logo"></div>
    <ul class="nav-links">
        <li>
        <Link to='/home'>Home</Link>
        </li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {/* <li><a href="#contact">Contact</a></li> */}
    </ul>
    <div style={{marginRight: '22px'}}>
    <Link style={{color:'white',textDecoration:'none'}} onClick={handleLogout} to='/'>Signout</Link>
      </div>
</nav>

  )
}

export default Headers

