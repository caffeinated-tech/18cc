
import React from "react"
import { Link } from "gatsby"
import style from "./header.module.css"

const HeaderLink = (props) => (
  <li className={style.link}>
  	<Link to={props.to}>
  		{props.children}
  	</Link>
  </li>
)

export default ({ children }) => (
  <div className={style.header}>
		<h1 className={style.logo}>	
	  	<Link to="/">
	      18cc
	  	</Link>
    </h1>
    <ul className={style.linkList}>
	    <HeaderLink to="/about/">About</HeaderLink>
	    <HeaderLink to="/contact/">Contact</HeaderLink>
    </ul>
	</div>
)