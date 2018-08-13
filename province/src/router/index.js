import React from 'react';
import {
	BrowerRouter, Router, HashRouter, Macth, Route, Link, hashHistory, IndexLink
}
from 'react-router-dom';
import Header from '../component/Header/index';

class RouteComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header></Header>
				<div>
					<Link to='/'>Home</Link>
					<Link to='/list'>List</Link>
				</div>
				<div>{this.props.children}</div>
    </div>
		);
	}
}
export default RouteComponent;