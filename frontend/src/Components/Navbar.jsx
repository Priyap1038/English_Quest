import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate=useNavigate();
 const gologin=()=>{
    navigate("/login")
 }

  return (
    <div style={{background:"red", display:"flex",justifyContent:"space-between"}}>
        <h4>Books</h4>
        <button onClick={gologin}>Login</button>
    </div>
  )
}

export default Navbar