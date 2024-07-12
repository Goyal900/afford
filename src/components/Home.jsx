import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div>I am Gareeb plz Hire Me</div>
    <h1>Afford Medical</h1>
    <Link to='/register'>
    <button>register</button></Link>
    <Link to='/login'>
    <button>Login</button></Link>
    </>
  )
}

export default Home