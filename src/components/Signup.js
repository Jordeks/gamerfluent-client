import React, { useState } from 'react'


const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

const onUsernameChange = event => {
    setUsername(event.target.value)
}

const onPasswordChange = event => {
  setPassword(event.target.value)
}
console.log(username, password)
  return (
    <div>
      <form>
        <input type='text' placeholder='username' onChange={onUsernameChange} name='Username' value={ username }/>
        <input type='password' placeholder='password' onChange={onPasswordChange} name='Password' value={ password } />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
