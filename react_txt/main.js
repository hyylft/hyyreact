import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router, Route, IndexRoute, hashHistory
}
from 'react-router';

import Routerpath from './router/Router.jsx';

import App from './jsx/app.jsx';
import HooLoo from './jsx/hooloo.jsx';
import WebSite from './jsx/website.jsx';
import LikeBtn from './jsx/likebtn.jsx';
import Reactajax from './jsx/Reactajax.jsx';
import Webprops from './jsx/webprops.jsx';

class Rtpath extends React.Component {
	render() {
		return (
			<div>	
				<Routerpath/>
				{this.props.children}
			</div>
		)
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Rtpath}>
			<IndexRoute component={App}/>
			<Route path="/" component={App}/>
			<Route path="/hooloo" component={HooLoo}/>
			<Route path="/website" component={WebSite}/>
			<Route path="/likebtn" component={LikeBtn}/> 
			<Route path = "/webprops"component = {Webprops}/>
			<Route path = "/reactajax"component = {Reactajax}/>
		</Route>
	</Router>
), document.getElementById('app'));