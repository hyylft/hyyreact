import React from 'react';
import ReactDOM from 'react-dom';

var Reactajax = React.createClass({
	getInitialState: function() {
		return {
			source: 'https://api.github.com/users/octocat/gists',
			username: '',
			lastGistUrl: ''
		};
	},

	componentDidMount: function() {
		this.serverRequest = $.get(this.state.source, function(result) {
			var lastGist = result[0];
			this.setState({
				username: lastGist.owner.login,
				lastGistUrl: lastGist.html_url
			});
		}.bind(this));
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render: function() {
		return (
			<div>
        {this.props.username}用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
		);
	}
});

class ShoppingList extends React.Component {
	render() {
		return (
			<div>
				<Reactajax username="hyy"/>
			</div>
		)
	}
}
export default ShoppingList;