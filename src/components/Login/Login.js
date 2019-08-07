import React, {Component} from 'react'
import './Login.css'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div className='Login'>
        <h2>Log In</h2>
        <input placeholder="Username" type="text"/>
        <input placeholder="Password" type="password"/>
        <div className="spacer"></div>
        <button>Login</button>
      </div>
    )
  }
}