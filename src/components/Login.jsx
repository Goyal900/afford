import React from 'react'

function Login() {
  return (
    <div>
        <label htmlFor="username">UserName</label>
        <input type="text" />
        <label htmlFor="username">password</label>
        <input type="password" />
        <button>Submit</button>
        <a href="/register">Register</a>
    </div>
  )
}

export default Login