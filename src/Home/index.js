import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
	testAxios=()=>{ 
		console.log('pressed');
		axios.post('http://192.168.21.102:3000/users/register', {
			firstName: 'Fred',
			lastName: 'Flintstone',
			signature:'Kuhyari',
			email:'Kuh@yar.me',
			password:'123',
			phone:"0912"
		  })
		  .then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}
	render() {
		return (
			<div>
				hoooooooooooooomeeeeeefdfdf
				<div className="mainbar">
					{this.props.children}
				</div>
				<input type="button" onClick={()=>this.testAxios()} value="Click me" />
			</div>
		)
	}
}
