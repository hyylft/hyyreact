import React from 'react';
import ReactDOM from 'react-dom';

var WebSite = React.createClass({
	getInitialState: function() {
		return {
			name: "百度",
			link: "http://www.baidu.com"
		}
	},

	render: function() {
		return (
			<div>
				<Name name={this.state.name} />
				<Link link={this.state.link} />
			</div>
		)

	}
});

var Name = React.createClass({
	render: function() {
		return (
			<h2>{this.props.name}</h2>
		)
	}
});

var Link = React.createClass({
	render: function() {
		return (
			<a href={this.props.link}>
				{this.props.link}
			</a>
		)
	}
});
export default WebSite;