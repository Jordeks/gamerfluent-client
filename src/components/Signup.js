import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  const [targets, setTargets] = useState({})

const onChange = event => {
  setTargets({...targets, [`${event.target.name}`]: event.target.value})
}

  return (
    <div>
      <NavLink className='button' to='/'>Landing Page</NavLink>
      <form>
        <input type='text' placeholder='username' onChange={onChange} name='Username' value={ targets.username }/>
        <input type='password' placeholder='password' onChange={onChange} name='Password' value={ targets.password } />
        <button className='button' type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
