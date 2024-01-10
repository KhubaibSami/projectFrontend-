import React from 'react'
import Login from '../components/login/login'
import Signup from '../components/signup/signup'
import Reset from '../components/resetPassword/reset'

const Form = () => {
  return (
    <div>
      <Login />
      <Signup /> 
      <Reset />
    </div>
  )
}

export default Form
