import React from 'react';
import ReactDOM from 'react-dom';
var Button = React.createClass({
	getInitialState: function() {
		return {
			data: 0
		};
	},
	setNewNumber: function() {
		this.setState({
			data: this.state.data + 1
		})
	},
	render: function() {
		return (
			<div>
            <button onClick = {this.setNewNumber}>react生命周期</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
		);
	}
})
var Content = React.createClass({
	componentWillMount: function() {
		console.log('component Will Mount!' + ' 在渲染前调用,在客户端也在服务端')
	},
	componentDidMount: function() {
		console.log('component Did Mount!' + '在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构')
	},
	componentWillReceiveProps: function(newProps) {
		console.log('component Will ReceiveProps!' + '在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用')
	},
	shouldComponentUpdate: function(newProps, newState) {
		return true;
		console.log('should Component Update ' + '在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用')
	},
	componentWillUpdate: function(nextProps, nextState) {
		console.log('component Will Update!' + '在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用');
	},
	componentDidUpdate: function(prevProps, prevState) {
		console.log('component Did Update!' + '在组件完成更新后立即调用。在初始化时不会被调用')
	},
	componentWillUnmount: function() {
		console.log('component Will Unmount!' + '在组件从 DOM 中移除的时候立刻被调用')
	},

	render: function() {
		return (
			<div>
          <h3>{this.props.myNumber}</h3>
        </div>
		);
	}
});
export default Button;