import React from "react"

import Header from "./header"

export default ({ children }) => (
	<div>
		<Header></Header>
    <div className="layout container">
      {children}
    </div>
	</div>
)