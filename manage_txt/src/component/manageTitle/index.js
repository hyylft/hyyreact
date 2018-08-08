import React from 'react';
import './TitleStyle.css';


class ManageTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 className="titUrl">
				    <span>当前所在位置：</span><span>{this.props.title[0]}</span><span>&nbsp;&gt;&nbsp;</span><span className="currentPage">{this.props.title[1]}</span>
				</h1>
			</div>
		);
	}
}
export default ManageTitle;