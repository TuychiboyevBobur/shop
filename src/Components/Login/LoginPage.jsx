import React, { useState } from "react"

function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (event) => setUsername(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Username: ${username}\nPassword: ${password}`)
    // TODO: Send login request to server
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-label">
        Username:
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <br />
      <label className="login-label">
        Password:
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button className="login-btn" type="submit">
        Sign In
      </button>
    </form>
  )
}

export default LoginPage;
