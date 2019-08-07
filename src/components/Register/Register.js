import React, {Component} from 'react'
import './Register.css'

export default class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password1: '',
      password2: '',
      name: '',
      email: ''
    }
  }
  render() {
    return (
      <div className='Register'>
        <h2>Register</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
        <button>Register</button>
      </div>
    )
  }
}