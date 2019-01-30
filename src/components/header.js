
import React from "react"
import { Link } from "gatsby"

const HeaderLink = (props) => (
  <li className="header-link">
  	<Link to={props.to}>
  		{props.children}
  	</Link>
  </li>
)

export default ({ children }) => (
  <div className="header">
    <div className="container">
  		<div className="header-logo">	
        <img src="/assets/18cc.png"/>
  	  	<Link to="/">
  	      18cc
  	  	</Link>
      </div>
      <ul className="header-list">
  	    <HeaderLink to="/about/">About</HeaderLink>
  	    <HeaderLink to="/contact/">Contact</HeaderLink>
      </ul>
    </div>
	</div>
)