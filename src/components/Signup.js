import React, { useState } from 'react'


const Signup = () => {
  const [targets, setTargets] = useState({})

const onChange = event => {
  setTargets({...targets, [`${event.target.name}`]: event.target.value})
}
console.log(targets)
  return (
    <div>
      <form>
        <input type='text' placeholder='username' onChange={onChange} name='Username' value={ targets.username }/>
        <input type='password' placeholder='password' onChange={onChange} name='Password' value={ targets.password } />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup
