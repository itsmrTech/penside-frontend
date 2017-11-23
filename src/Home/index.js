import React, { Component } from 'react'

export default class Home extends Component {

	render() {
		return (
			<div>
				hoooooooooooooomeeeeeefdfdf
				<div className="mainbar">
					{this.props.children}
				</div>
			</div>
		)
	}
}
