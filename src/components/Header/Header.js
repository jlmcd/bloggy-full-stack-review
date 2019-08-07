import React from 'react'
import './Header.css'
import { withRouter, Link } from 'react-router-dom'

const Header = props => (
  <div className="Header">
    <div className="logo">
      <h1>Bloggy</h1>
    </div>
    <nav>
      <Link to="/blog">Blog</Link>
      {props.loggedIn ? <Link to="/dashboard">Dashboard</Link> : null}
    </nav>
  </div>
)

export default withRouter(Header)
