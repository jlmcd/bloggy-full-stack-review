import React, {Component} from 'react'
import './Landing.css'
import Login from '../Login/Login'
import Register from '../Register/Register'

export default class Landing extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className='Landing'>
        <Login />
        <Register />
      </div>
    )
  }
}