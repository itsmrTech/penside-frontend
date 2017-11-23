import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Users from './Users'
import NotMatch from './404'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/home" render={() => (
					<Home>
						<Route path="/home/users" component={Users} />
					</Home>
				)} />
				<Route path="*" component={NotMatch}/>
			</Switch>
		</Router>
	)
}

export default App
