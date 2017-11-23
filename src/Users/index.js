import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="login">
                <div className="background">
                    <p>Usersssssssss</p>
                </div>
            </div>
        )
    }
}
