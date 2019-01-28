import React from "react"
import style from './layout.module.css'

import Header from "./header"

export default ({ children }) => (
	<div>
		<Header></Header>
    <div className={style.layout}>
      {children}
    </div>
	</div>
)