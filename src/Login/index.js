import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {
		const { email, password } = this.state;

		console.log('object')

        return (
            <div className="login">
                <div className="background">
                    logiiiiiiiiiiiiiin
					<img src="/assets/img/profile.png" alt=""/>
                </div>
            </div>
        )
    }
}
