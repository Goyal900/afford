import React from 'react'

function Register() {
  return (
    <div>
        <label htmlFor="username">UserName</label>
        <input type="text" />
        <label htmlFor="username">password</label>
        <input type="password" />
        <button>Submit</button>
        <a href="/login">Login</a>
    </div>
  )
}

export default Register