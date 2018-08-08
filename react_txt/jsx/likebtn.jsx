import React from 'react';
import ReactDOM from 'react-dom';

var LikeBtn = React.createClass({
	getInitialState: function() {
		// getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取
		return {
			liked: true
		};
	},
	handleClick: function() {
		this.setState({
			liked: !this.state.liked
		})
	},
	render: function() {
		var text = this.state.liked ? '点击' : '取消点击';
		return (
			<div>可以点击相互切换<br/>

				<a className="btn" href="javascript:;" onClick={this.handleClick} >
					{text}
				</a>
			</div>
		)
	}
});
export default LikeBtn;