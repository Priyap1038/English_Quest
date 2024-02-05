import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

//     const navigate=useNavigate();
//  const gologin=()=>{
//     navigate("/login")
//  }

  return (
    <div style={{background:"#32a2a8", display:"flex",justifyContent:"space-between"}}>
      <Link to="/" ><h4>Home</h4></Link>
       <Link to="/books" > <h4>Books</h4></Link>
       <Link to="/login" > <h4>Login</h4></Link>
    </div>
  )
}

export default Navbar