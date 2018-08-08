import React from 'react';
import ReactDOM from 'react-dom';

var HooLoo = React.createClass({
	getInitialState: function() {
		return {
			name: 'getInitialState对应state,是可变的'
		};
	},
	getDefaultProps: function() {
		return {
			dataname: 'getDefaultProps对应props,是不变的'
		};
	},
	render: function() {
		return <div><div className="box">getInitialState和getDefaultProps的区别 : </div>{this.state.name+'  '+ this.props.dataname}</div>;
	}
})
export default HooLoo;