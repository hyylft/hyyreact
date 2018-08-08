import React from 'react';
import '../public/style.css';

class Header extends React.Component {
	render(){
		return (
			<div>
				<h2 className="headerBox">{this.props.title}</h2>
			</div>
		)
	}
}
export default Header;